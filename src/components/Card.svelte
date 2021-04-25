<script lang="ts">
  import type { Card } from '../lib/types';

  export let card: Card;
</script>

<div class="border border-gray-200 p-4 mb-4 rounded last:mb-0">
  <p class="text-sm text-gray-800">{card.title}</p>
</div>
