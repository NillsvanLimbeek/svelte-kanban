<script lang="ts">
  import { link } from 'svelte-spa-router';

  import type { Board } from '../lib/types';

  import SideMenu from './SideMenu.svelte';
  import SidebarLink from './SidebarLink.svelte';
  import Icon from './Icon.svelte';

  export let boards: Board[] = [];
  let boardsMenuOpen = false;
  let menuOpen = false;
</script>

<header class="relative flex justify-between px-3 py-5 border-b border-gray-200 shadow-md">
  <div
    class="flex cursor-pointer text-gray-400 hover:text-kanban-blue transition-colors duration-300 ease-in-out"
    on:click={() => (boardsMenuOpen = true)}
  >
    <Icon name="grid" />
    <p class="ml-3">Boards</p>
  </div>

  <a href="/" use:link>
    <div
      class="flex items-center text-gray-400 hover:text-kanban-blue transition-colors duration-300 ease-in-out"
    >
      <Icon name="trello" />
      <p class="ml-2">Trello</p>
    </div>
  </a>

  <div
    class="text-gray-400 hover:text-kanban-blue cursor-pointer transition-colors duration-300 ease-in-out"
    on:click={() => (menuOpen = true)}
  >
    <Icon name="menu" />
  </div>
</header>

<SideMenu isOpen={boardsMenuOpen} on:close={() => (boardsMenuOpen = false)}>
  {#each boards as board}
    <a href="/board/{board.id}" class="mb-2" use:link on:click={() => (boardsMenuOpen = false)}>
      <SidebarLink {board} />
    </a>
  {/each}
</SideMenu>

<SideMenu isOpen={menuOpen} menuPosition="right" on:close={() => (menuOpen = false)}>
  Contextual Menu
</SideMenu>
