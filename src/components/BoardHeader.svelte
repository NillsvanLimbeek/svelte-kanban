<script lang="ts">
  import type { Board } from '../lib/types';
  import BoardHeaderButton from './BoardHeaderButton.svelte';

  export let board: Board;
  let view: 'board' | 'calendar' = 'board';
</script>

<div class="flex justify-between">
  <div class="flex">
    <div class="h-10 w-10 rounded mr-2" style="background-color: {board.color}" />
    <p class="text-lg">{board.title}</p>
  </div>

  <p>{view}</p>

  <div class="flex">
    <BoardHeaderButton
      class="border rounded-l"
      view="board"
      icon="barchart"
      active={view === 'board'}
      on:view={(e) => (view = e.detail)}
    />
    <BoardHeaderButton
      class="border-r border-t border-b rounded-r"
      view="calendar"
      icon="calendar"
      active={view === 'calendar'}
      on:view={(e) => (view = e.detail)}
    />
  </div>
</div>
