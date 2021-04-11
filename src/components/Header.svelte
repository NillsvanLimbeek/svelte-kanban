<script lang="ts">
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { fade } from 'svelte/transition';
    import { link } from 'svelte-spa-router';

    import type { Board } from '../lib/types';
    import { clickOutside } from '../lib/directives';

    import Grid from './Icons/Grid.svelte';
    import Times from './Icons/Times.svelte';
    import SidebarLink from './SidebarLink.svelte';
    import Trello from './Icons/Trello.svelte';

    export let boards: Board[] = [];
    let navOpen = false;

    const position = tweened(-325, {
        duration: 500,
        delay: 100,
        easing: cubicOut,
    });

    function openNav() {
        navOpen = true;
        $position = 0;
    }

    function closeNav() {
        navOpen = false;
        $position = -325;
    }
</script>

<header class="flex mb-4 px-3 py-5 border-b border-gray-200 shadow-md">
    <div
        class="flex cursor-pointer text-gray-400 hover:text-gray-800 transition-colors duration-300 ease-in-out"
        on:click={openNav}
    >
        <Grid />
        <p class="ml-3">Boards</p>
    </div>

    <a href="/" use:link>
        <div class="flex items-center">
            <Trello class="mr-3" />
            <p>Trello</p>
        </div>
    </a>
</header>

<aside
    class="fixed top-0 left-0 z-10 h-screen w-80 flex flex-col border-r border-gray-200 bg-white p-5"
    style="transform: translateX({$position}px)"
    use:clickOutside
    on:click_outside={closeNav}
>
    <div class="absolute top-1 right-1" on:click={closeNav}>
        <Times
            class="cursor-pointer text-gray-400 hover:text-gray-800 transition-colors duration-300 ease-in-out"
        />
    </div>

    {#each boards as board}
        <a href="/board/{board.id}" class="mb-2" use:link on:click={closeNav}>
            <SidebarLink {board} />
        </a>
    {/each}
</aside>

{#if navOpen}
    <div
        class="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-30"
        transition:fade={{ delay: 100, duration: 500 }}
    />
{/if}
