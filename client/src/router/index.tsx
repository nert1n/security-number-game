import { LazyMain } from '@/pages/main/Main.lazy';
import { LazyError } from '@/pages/error/Error.lazy';
import { LazyRegistration } from '@/pages/auth/registration/Registration.lazy';
import { LazyLogin } from '@/pages/auth/login/Login.lazy';

export const publicRoutes = [
  {
    path: '*',
    component: <LazyMain  />,
  },
  {
    path: '/error',
    component: <LazyError />,
  },
  {
    path: '/login',
    component: <LazyLogin />,
  },
  {
    path: '/registration',
    component: <LazyRegistration />,
  },
];
