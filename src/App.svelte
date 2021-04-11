<script lang="ts">
    import Router from 'svelte-spa-router';

    import Tailwind from './components/Tailwind.svelte';
    import Header from './components/Header.svelte';

    import { routes } from './lib/routes';
    import boardStore from './lib/store/boards';

    $: boards = $boardStore.boards;
</script>

<Tailwind />

<Header {boards} />
<Router {routes} />
