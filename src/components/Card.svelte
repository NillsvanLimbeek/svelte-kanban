<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { pop } from 'svelte-spa-router';

  import cardStore from '../lib/store/cards';

  import Icon from './Icon.svelte';

  export let params;

  $: card = $cardStore.cards.find((card) => card.id === params.id);
</script>

<div
  transition:fly={{ y: 50, duration: 350 }}
  class="h-[35rem] w-[45rem] absolute top-[25%] left-[50%] z-10 bg-white p-5 transform translate-x-[-50%] translate-y-[-25%] rounded shadow-md"
>
  <div
    on:click={() => pop()}
    class="absolute top-4 right-4 text-gray-400 hover:text-gray-800 cursor-pointer transition-colors duration-300 ease-in-out"
  >
    <Icon name="times" />
  </div>

  <h1>{card.title}</h1>
</div>

<div
  on:click={() => pop()}
  transition:fade={{ duration: 350 }}
  class="bg-black opacity-20 absolute top-0 right-0 bottom-0 left-0"
/>
