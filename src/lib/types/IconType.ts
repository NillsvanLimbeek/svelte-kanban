import type { SvelteComponent } from 'svelte';

export interface IconType {
  name: string;
  component: typeof SvelteComponent;
}
