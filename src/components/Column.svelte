<script lang="ts">
  import { dndzone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';

  import columnStore from '../lib/store/columns';
  import cardStore from '../lib/store/cards';
  import type { Column, Card as ICard, DragEvent } from '../lib/types';

  import Card from './Card.svelte';
  import Icon from './Icon.svelte';

  export let column: Column;

  $: cards = column.cardIds.map((id) => cardStore.findCardById(id));

  function handleDndFinalizeCards(e: CustomEvent<DragEvent<ICard[]>>) {
    const ids = e.detail.items.map((item) => item.id);

    const newColumn = columnStore.findColumnById(column.id);
    newColumn.cardIds = ids;

    columnStore.updateColumn(newColumn);
  }
</script>

<div class="w-60 bg-white mr-3 px-3 border-gray-300 shadow-md rounded-sm self-start">
  <div class="w-full flex justify-between items-center py-4">
    <div class="flex items-center">
      <Icon name="circle" size="7" class="mr-2 text-gray-400" />
      <h2 class="font-medium text-gray-800">{column.title}</h2>
    </div>

    <Icon name="more-hor" class="text-gray-400 cursor-pointer hover:text-kanban-blue" />
  </div>

  <div
    class="flex flex-col"
    use:dndzone={{ items: cards, flipDurationMs: 300 }}
    on:consider={(e) => (cards = e.detail.items)}
    on:finalize={handleDndFinalizeCards}
  >
    {#each cards as card (card.id)}
      <div class="mb-4 rounded last:mb-0" animate:flip={{ duration: 300 }}>
        <Card {card} />
      </div>
    {/each}
  </div>

  <div class="w-full flex justify-center">
    <h2
      class="text-gray-300 font-light py-6 cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-800"
    >
      Add card
    </h2>
  </div>
</div>
