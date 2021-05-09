<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { dndzone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';

  import type { DragEvent, ICard } from '../lib/types';

  export let cards: ICard[];
  export let itemComponent: typeof SvelteComponent;
  export let idPropertyName = 'id';
  export let handleConsider: (e: CustomEvent<DragEvent<ICard[]>>) => void;
  export let handleFinalize: (e: CustomEvent<DragEvent<ICard[]>>) => void;
</script>

<section
  use:dndzone={{ items: cards, flipDurationMs: 300 }}
  on:consider={handleConsider}
  on:finalize={handleFinalize}
>
  {#each cards as item (item[idPropertyName])}
    <div animate:flip={{ duration: 300 }}>
      <svelte:component this={itemComponent} card={item} />
    </div>
  {/each}
</section>
