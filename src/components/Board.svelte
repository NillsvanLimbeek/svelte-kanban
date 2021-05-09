<script lang="ts">
  import { dndzone, SHADOW_ITEM_MARKER_PROPERTY_NAME } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';
  import Router, { push } from 'svelte-spa-router';

  import boardStore from '../lib/store/boards';
  import columnStore from '../lib/store/columns';
  import cardStore from '../lib/store/cards';
  import type { DragEvent, IColumn, IBoard, ICard } from '../lib/types';
  import { boardRoutes } from '../lib/routes';

  import BoardHeader from './BoardHeader/BoardHeader.svelte';
  import CardItem from './CardItem.svelte';
  import Column from './Column.svelte';
  import PlaceholderShadow from './PlaceholderShadow.svelte';
  import ColumnList from './ColumnList.svelte';

  export let params;

  $: board = $boardStore.boards.find((board) => board.id === params.id);
  $: columns = board.columnIds.map((id) => columnStore.findColumnById(id));
  $: trigger = $columnStore.columns.filter((column) => column.boardId === board.id);

  $: updateColumns(trigger);
  function updateColumns(trigger?: IColumn[]) {
    columns = board.columnIds.map((id) => columnStore.findColumnById(id));
  }

  function considerColumns(e: CustomEvent<DragEvent<IColumn[]>>) {
    columns = e.detail.items;
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
</script>

<BoardHeader {board} on:favorite={(e) => console.log(e)} />

<ColumnList {columns} itemComponent={Column} {finalizeColumns} {considerColumns} />

<Router routes={boardRoutes} prefix={`/board/${params.id}`} />
