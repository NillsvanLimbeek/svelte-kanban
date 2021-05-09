<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { dndzone, SHADOW_ITEM_MARKER_PROPERTY_NAME } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';

  import type { DragEvent, IColumn } from '../lib/types';
  import PlaceholderShadow from './PlaceholderShadow.svelte';

  export let columns: IColumn[];
  export let itemComponent: typeof SvelteComponent;
  export let idPropertyName = 'id';
  export let considerColumns: (e: CustomEvent<DragEvent<IColumn[]>>) => void;
  export let finalizeColumns: (e: CustomEvent<DragEvent<IColumn[]>>) => void;
</script>

<div class="flex">
  <section
    class="flex"
    use:dndzone={{ items: columns, flipDurationMs: 300, type: 'columns' }}
    on:consider={considerColumns}
    on:finalize={finalizeColumns}
  >
    {#each columns as item (item[idPropertyName])}
      <!-- <div animate:flip={{ duration: 300 }}> -->
      <svelte:component this={itemComponent} column={item} />
      <!-- </div> -->

      {#if item[SHADOW_ITEM_MARKER_PROPERTY_NAME]}
        <PlaceholderShadow type="column" />
      {/if}
    {/each}
  </section>

  <button
    class="w-60 bg-white py-5 border-gray-300 shadow-md rounded-sm self-start font-light text-gray-300 hover:text-gray-800 transition-colors duration-300 ease-in-out"
  >
    Add Column
  </button>
</div>
