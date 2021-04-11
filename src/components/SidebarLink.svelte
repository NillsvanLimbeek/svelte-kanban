<script lang="ts">
    import type { Board } from '../lib/types';

    import Square from './Icons/Square.svelte';

    export let board: Board;
</script>

<div class="flex">
    <Square color={board.color} />
    <p class="ml-3">{board.title}</p>
</div>
