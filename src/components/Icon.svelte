<script lang="ts">
  import { icons } from './Icons';

  export let name: string;

  function findIcon() {
    const { component } = icons.find((icon) => icon.name === name);
    return component;
  }
</script>

<svelte:component this={findIcon()} {...$$restProps} />
