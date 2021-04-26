<script lang="ts">
  import type { Card } from '../lib/types';

  export let card: Card;
</script>

<div class="border border-gray-200 p-4">
  <p class="text-sm text-gray-800">{card.title}</p>
</div>
