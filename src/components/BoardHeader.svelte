<script lang="ts">
  import type { Board } from '../lib/types';
  import Icon from './Icon.svelte';

  export let board: Board;
</script>

<div class="flex justify-between">
  <div class="flex">
    <div class="h-10 w-10 rounded mr-2" style="background-color: {board.color}" />
    <p class="text-lg">{board.title}</p>
  </div>

  <div class="flex">
    <button class="flex items-center px-3 border-t border-b border-l border-gray-300 rounded-l-sm">
      <Icon name="barchart" class="transform rotate-180 scale-75" />
      Boards
    </button>

    <button class="flex items-center px-3 border border-gray-300 rounded-r-sm">
      <Icon name="calendar" class="transform scale-75" />
      Calendar
    </button>
  </div>
</div>
