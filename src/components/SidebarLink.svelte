<script lang="ts">
  import type { Board } from '../lib/types';
  import Icon from './Icon.svelte';

  import Square from './Icons/Square.svelte';

  export let board: Board;
</script>

<div class="flex">
  <Icon name="square" color={board.color} />
  <p class="ml-3">{board.title}</p>
</div>
