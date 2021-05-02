<script lang="ts">
  import { dndzone, SHADOW_ITEM_MARKER_PROPERTY_NAME } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';
  import Router, { push } from 'svelte-spa-router';

  import boardStore from '../lib/store/boards';
  import columnStore from '../lib/store/columns';
  import type { DragEvent, IColumn, IBoard, ICard } from '../lib/types';
  import { boardRoutes } from '../lib/routes';

  import BoardHeader from './BoardHeader.svelte';
  import CardItem from './CardItem.svelte';
  import Column from './Column.svelte';
  import PlaceholderShadow from './PlaceholderShadow.svelte';

  export let params;

  $: board = $boardStore.boards.find((board) => board.id === params.id);
  $: columns = board.columnIds.map((id) => columnStore.findColumnById(id));
  $: trigger = $columnStore.columns.filter((column) => column.boardId === board.id);

  $: updateColumns(trigger);
  function updateColumns(trigger?: IColumn[]) {
    columns = board.columnIds.map((id) => columnStore.findColumnById(id));
  }

  function finalizeColumns(e: CustomEvent<DragEvent<IColumn[]>>) {
    const ids = e.detail.items.map((item) => item.id);

    const newBoard = boardStore.findBoardById(params.id);
    newBoard.columnIds = ids;

    boardStore.updateBoard(newBoard);
  }

  function considerCards(e: CustomEvent<DragEvent<ICard[]>>, columnId: string) {
    const columnIndex = columns.findIndex((column) => column.id === columnId);
    columns[columnIndex].cards = e.detail.items;
    columns = [...columns];
  }

  function finalizeCards(e: CustomEvent<DragEvent<ICard[]>>, columnId: string) {
    const columnIndex = columns.findIndex((column) => column.id === columnId);
    columns[columnIndex].cards = e.detail.items;
    columns = [...columns];

    // make api call here
  }

  function addColumn() {
    const column: IColumn = {
      id: `${Date.now()}`,
      boardId: board.id,
      cards: [],
      title: 'Test ',
    };

    columnStore.addColumn(column);

    const newBoard: IBoard = { ...board, columnIds: [...board.columnIds, column.id] };
    boardStore.updateBoard(newBoard);
  }

  async function addCard(e: CustomEvent<string>) {
    const column = columnStore.findColumnById(e.detail);
    const card: ICard = {
      id: `${Date.now()}`,
      columnId: e.detail,
      title: 'Test ',
    };

    const newColumn: IColumn = { ...column, cards: [...column.cards, card] };
    columnStore.updateColumn(newColumn);
  }
</script>

<BoardHeader {board} />

<div class="flex">
  <div
    class="flex"
    use:dndzone={{
      items: columns,
      flipDurationMs: 300,
      type: 'columns',
      dropTargetStyle: { outline: 'none' },
    }}
    on:consider={(e) => (columns = e.detail.items)}
    on:finalize={finalizeColumns}
  >
    {#each columns as column (column.id)}
      <div animate:flip={{ duration: 200 }}>
        <div class="relative">
          <Column {column} on:add-card={(e) => addCard(e)}>
            <div
              class="flex flex-col"
              use:dndzone={{
                items: column.cards,
                flipDurationMs: 300,
                dropTargetStyle: { outline: 'none' },
              }}
              on:consider={(e) => considerCards(e, column.id)}
              on:finalize={(e) => finalizeCards(e, column.id)}
            >
              {#each column.cards as card (card.id)}
                <div class="relative mb-4 rounded last:mb-0" animate:flip={{ duration: 300 }}>
                  <CardItem {card} on:navigate={() => push(`/board/${board.id}/card/${card.id}`)} />

                  {#if card[SHADOW_ITEM_MARKER_PROPERTY_NAME]}
                    <PlaceholderShadow type="card" />
                  {/if}
                </div>
              {/each}
            </div>
          </Column>

          {#if column[SHADOW_ITEM_MARKER_PROPERTY_NAME]}
            <PlaceholderShadow type="column" />
          {/if}
        </div>
      </div>
    {/each}
  </div>

  <button
    on:click={addColumn}
    class="w-60 bg-white py-5 border-gray-300 shadow-md rounded-sm self-start font-light text-gray-300 hover:text-gray-800 transition-colors duration-300 ease-in-out"
  >
    Add Column
  </button>
</div>

<Router routes={boardRoutes} prefix={`/board/${params.id}`} />
