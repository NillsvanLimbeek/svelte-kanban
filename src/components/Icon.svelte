<script lang="ts">
  import { icons } from './Icons';

  export let name: string;

  function findIcon() {
    const component = icons.find((icon) => icon.name === name);

    if (!component) throw new Error(`${name} was not found as available icon`);

    return component.component;
  }
</script>

<svelte:component this={findIcon()} {...$$restProps} />
