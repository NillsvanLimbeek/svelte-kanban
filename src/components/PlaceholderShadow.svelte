<script lang="ts">
  import { cubicIn } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  export let type: 'card' | 'column';
</script>

<div
  in:fade={{ duration: 200, easing: cubicIn }}
  class="absolute top-0 right-0 bottom-0 left-0
    {type === 'card'
    ? 'bg-gray-200'
    : 'bg-gray-400'}
    border
    {type === 'card'
    ? 'border-gray-400'
    : 'border-gray-600'}
    rounded-sm opacity-25 m-0 visible"
/>
