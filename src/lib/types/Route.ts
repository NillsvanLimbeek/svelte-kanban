import type { SvelteComponent } from 'svelte';

export interface Route {
  [route: string]: typeof SvelteComponent;
}
