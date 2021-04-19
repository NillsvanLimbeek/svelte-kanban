import type { SvelteComponent } from 'svelte';

import Grid from './Grid.svelte';
import Trello from './Trello.svelte';
import Menu from './Menu.svelte';
import Square from './Square.svelte';
import Star from './Star.svelte';
import Times from './Times.svelte';
import Calendar from './Calendar.svelte';
import BarChart from './BarChart.svelte';

interface IconType {
  name: string;
  component: typeof SvelteComponent;
}

export const icons: IconType[] = [
  { name: 'grid', component: Grid },
  { name: 'trello', component: Trello },
  { name: 'menu', component: Menu },
  { name: 'square', component: Square },
  { name: 'star', component: Star },
  { name: 'times', component: Times },
  { name: 'calendar', component: Calendar },
  { name: 'barchart', component: BarChart },
];
