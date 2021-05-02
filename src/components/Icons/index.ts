import type { IconType } from './../../lib/types';

import Grid from './Grid.svelte';
import Trello from './Trello.svelte';
import Menu from './Menu.svelte';
import Square from './Square.svelte';
import Star from './Star.svelte';
import Times from './Times.svelte';
import Calendar from './Calendar.svelte';
import BarChart from './BarChart.svelte';
import BarChartHor from './BarChartHor.svelte';
import Columns from './Columns.svelte';
import CaretDown from './CaretDown.svelte';
import Circle from './Circle.svelte';
import MoreHor from './MoreHor.svelte';
import SideBar from './SideBar.svelte';
import AlignLeft from './AlignLeft.svelte';
import List from './List.svelte';

export const icons: IconType[] = [
  { name: 'grid', component: Grid },
  { name: 'trello', component: Trello },
  { name: 'menu', component: Menu },
  { name: 'square', component: Square },
  { name: 'star', component: Star },
  { name: 'times', component: Times },
  { name: 'calendar', component: Calendar },
  { name: 'barchart', component: BarChart },
  { name: 'barchart-hor', component: BarChartHor },
  { name: 'columns', component: Columns },
  { name: 'caret-down', component: CaretDown },
  { name: 'circle', component: Circle },
  { name: 'more-hor', component: MoreHor },
  { name: 'sidebar', component: SideBar },
  { name: 'align-left', component: AlignLeft },
  { name: 'list', component: List },
];
