import { LazyMain } from '@/pages/main/Main.lazy';
import { LazyError } from '@/pages/error/Error.lazy';

export const publicRoutes = [
  {
    path: '/',
    component: <LazyMain  />,
  },
  {
    path: '/error',
    component: <LazyError />,
  },
];
