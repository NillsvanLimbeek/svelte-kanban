<script lang="ts">
  import boardStore from '../lib/store/boards';
  import columnStore from '../lib/store/columns';

  import BoardHeader from './BoardHeader.svelte';
  import Column from './Column.svelte';

  export let params;

  $: board = boardStore.findBoard(params.id);
  $: columns = columnStore.findColumns(params.id);
</script>

<BoardHeader {board} />

<div class="flex">
  {#each columns as column}
    <Column {column} />
  {/each}
</div>
