import type { SvelteComponent } from 'svelte';

import Home from '../../views/Home.svelte';
import Board from '../../components/Board.svelte';
import CardModal from '../../components/Card.svelte';

interface Route {
  [route: string]: typeof SvelteComponent;
}

export const routes: Route = {
  '/': Home,
  '/board/:id': Board,
  '/board/:id/*': Board,
};

export const boardRoutes: Route = {
  '/card/:id': CardModal,
};
