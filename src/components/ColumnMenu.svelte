<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { clickOutside } from '../lib/directives';

  const dispatch = createEventDispatcher();

  import Icon from './Icon.svelte';
</script>

<div
  class="bg-white rounded shadow border border-gray-200 p-3"
  use:clickOutside
  on:click_outside={() => dispatch('close')}
>
  <div
    class="absolute top-2 right-2 text-gray-400 hover:text-gray-800"
    on:click={() => dispatch('close')}
  >
    <Icon name="times" />
  </div>

  <h2 class="border-b border-gray-400 py-2 px-4 text-gray-500">Column actions</h2>
</div>
