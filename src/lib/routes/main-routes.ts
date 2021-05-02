import Home from '../../views/Home.svelte';
import Board from '../../components/Board.svelte';

import type { Route } from '../types';

export const mainRoutes: Route = {
  '/': Home,
  '/board/:id': Board,
  '/board/:id/*': Board,
};
