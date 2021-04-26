<script lang="ts">
  import { dndzone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';

  import boardStore from '../lib/store/boards';
  import columnStore from '../lib/store/columns';
  import type { DragEvent, Column as IColumn } from '../lib/types';

  import BoardHeader from './BoardHeader.svelte';
  import Column from './Column.svelte';

  export let params;

  $: boardIndex = $boardStore.boards.findIndex((board) => board.id === params.id);
  $: board = $boardStore.boards[boardIndex];
  $: columns = board.columnIds.map((id) => columnStore.findColumnById(id));

  // type e
  function handleDndFinalizeColumns(e: CustomEvent<DragEvent<IColumn[]>>) {
    const items = e.detail.items;
    const ids = items.map((item) => item.id);

    const newBoard = boardStore.findBoard(params.id);
    newBoard.columnIds = ids;

    boardStore.updateBoard(newBoard);
  }
</script>

<BoardHeader {board} />

<div
  class="flex"
  use:dndzone={{ items: columns, flipDurationMs: 300, type: 'columns' }}
  on:consider={(e) => (columns = e.detail.items)}
  on:finalize={handleDndFinalizeColumns}
>
  {#each columns as column (column.id)}
    <div animate:flip={{ duration: 200 }}>
      <Column {column} />
    </div>
  {/each}
</div>
