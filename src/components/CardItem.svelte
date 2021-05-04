<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import type { ICard } from '../lib/types';

  export let card: ICard;

  const dispatch = createEventDispatcher();
</script>

<div class="border border-gray-200 p-4" on:click={() => dispatch('navigate')}>
  <p class="text-sm text-gray-800">{card.title}</p>
</div>
