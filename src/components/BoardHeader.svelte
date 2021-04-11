<script lang="ts">
    import type { Board } from '../lib/types';

    import Square from './Icons/Square.svelte';

    export let board: Board;
</script>

<div class="flex">
    <Square class="mr-4" color={board.color} size={40} />
    <p class="text-xl font-light">{board.title}</p>
</div>
