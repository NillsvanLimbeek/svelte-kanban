<script lang="ts">
  import Router from 'svelte-spa-router';

  import Header from './components/Header.svelte';
  import Tailwind from './components/Tailwind.svelte';

  import { routes } from './lib/routes';
  import boardStore from './lib/store/boards';

  $: boards = $boardStore.boards;
</script>

<Tailwind />

<Header {boards} />

<main class="p-5">
  <Router {routes} />
</main>

<style src="./style.css"></style>
