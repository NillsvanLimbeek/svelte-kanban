<script lang="ts">
    import boardStore from '../lib/store/boards';

    import BoardHeader from './BoardHeader.svelte';

    export let params;

    $: board = boardStore.findBoard(params.id);
</script>

<BoardHeader {board} />
