<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { cubicOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';
  import { fade } from 'svelte/transition';

  import { clickOutside } from '../lib/directives';

  import Icon from './Icon.svelte';

  export let isOpen = false;
  export let menuPosition: 'left' | 'right' = 'left';
  const dispatch = createEventDispatcher();

  $: isOpen === true ? ($position = 0) : ($position = menuPosition === 'left' ? -325 : 325);

  const position = tweened(menuPosition === 'left' ? -325 : 325, {
    duration: 500,
    delay: 100,
    easing: cubicOut,
  });

  function closeNav() {
    dispatch('close', false);
  }
</script>

<nav
  class="fixed top-0 {menuPosition}-0 z-10 h-screen w-80 flex flex-col border-r border-gray-200 bg-white p-5"
  style="transform: translateX({$position}px)"
  use:clickOutside
  on:click_outside={closeNav}
>
  <div class="absolute top-1 right-1" on:click={closeNav}>
    <Icon
      name="times"
      class="cursor-pointer text-gray-400 hover:text-gray-800 transition-colors duration-300 ease-in-out"
    />
  </div>

  <slot />
</nav>

<!-- nav background  -->
{#if isOpen}
  <div
    class="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-30"
    transition:fade={{ delay: 100, duration: 500 }}
  />
{/if}
