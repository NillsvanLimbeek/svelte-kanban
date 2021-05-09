<script lang="ts">
  import type { DragEvent, ICard, IColumn } from '../lib/types';
  import columnStore from '../lib/store/columns';
  import cardStore from '../lib/store/cards';

  import CardItem from './CardItem.svelte';
  import CardList from './CardList.svelte';
  import ColumnMenu from './ColumnMenu.svelte';

  import Icon from './Icon.svelte';

  export let column: IColumn;
  let isOpen = false;

  function considerCards(e: CustomEvent<DragEvent<ICard[]>>) {
    column.cards = e.detail.items;
  }

  async function addCard() {
    const card: ICard = {
      id: `${Date.now()}`,
      columnId: column.id,
      title: 'Test ',
    };
    cardStore.addCard(card);

    const newColumn: IColumn = { ...column, cards: [...column.cards, card] };
    columnStore.updateColumn(newColumn);
  }
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

  <CardList
    cards={column.cards}
    itemComponent={CardItem}
    handleConsider={(e) => considerCards(e)}
    handleFinalize={(e) => columnStore.finalizeCards(e, column.id)}
  />

  <div class="w-full flex justify-center">
    <h2
      on:click={addCard}
      class="text-gray-300 font-light py-6 cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-800"
    >
      Add card
    </h2>
  </div>
</div>
