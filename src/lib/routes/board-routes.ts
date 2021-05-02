import type { Route } from '../types';

import CardModal from '../../components/Card.svelte';

export const boardRoutes: Route = {
  '/card/:id': CardModal,
};
