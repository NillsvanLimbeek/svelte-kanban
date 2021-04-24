<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import Icon from './Icon.svelte';

  export let view: string;
  export let icon: string;
  export let active: boolean;

  const dispatch = createEventDispatcher();
</script>

<button
  on:click={() => dispatch('view', view)}
  class="header-button {$$props.class}"
  class:header-button__active={active}
>
  <div class="transform scale-75" class:text-kanban-blue={active}>
    <Icon name={icon} />
  </div>

  <p class="capitalize">{view}</p>
</button>
