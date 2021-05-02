<script lang="ts">
  import Router from 'svelte-spa-router';

  import Header from './components/Header.svelte';
  import Tailwind from './components/Tailwind.svelte';

  import { mainRoutes } from './lib/routes/main-routes';
  import boardStore from './lib/store/boards';

  $: boards = $boardStore.boards;
</script>

<Tailwind />

<Header {boards} />

<main class="h-screen p-5 bg-gray-100">
  <Router routes={mainRoutes} />
</main>

<style src="./style.css"></style>
