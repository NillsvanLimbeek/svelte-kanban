<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import type { IColumn } from '../lib/types';
  import ColumnMenu from './ColumnMenu.svelte';

  import Icon from './Icon.svelte';

  export let column: IColumn;
  let isOpen = false;

  const dispatch = createEventDispatcher();
</script>

<div class="w-60 bg-white mr-3 px-3 border-gray-300 shadow-md rounded-sm self-start">
  <div class="w-full flex justify-between items-center py-4">
    <div class="flex items-center">
      <Icon name="circle" size="7" class="mr-2 text-gray-400" />
      <h2 class="font-medium text-gray-800">{column.title}</h2>
    </div>

    <div on:click={() => (isOpen = true)}>
      <Icon name="more-hor" class="text-gray-400 cursor-pointer hover:text-kanban-blue" />
    </div>

    {#if isOpen}
      <div class="absolute">
        <ColumnMenu on:close={() => (isOpen = false)} />
      </div>
    {/if}
  </div>

  <slot />

  <div class="w-full flex justify-center">
    <h2
      on:click={() => dispatch('add-card', column.id)}
      class="text-gray-300 font-light py-6 cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-800"
    >
      Add card
    </h2>
  </div>
</div>
