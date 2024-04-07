import { LazyMain } from '@/pages/main/Main.lazy';
import { LazyError } from '@/pages/error/Error.lazy';
import { LazyRegistration } from '@/pages/auth/registration/Registration.lazy';
import { LazyLogin } from '@/pages/auth/login/Login.lazy';
import { LazyRecovery } from '@/pages/auth/recovery/Recovery.lazy';
import { LazyConfirm_reg } from '@/pages/auth/confirm_reg/Confirm_reg.lazy';
import { LazyProfile } from '@/pages/profile/Profile.lazy';

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
    path: '/login/recovery',
    component: <LazyRecovery />,
  },
  {
    path: '/registration',
    component: <LazyRegistration />,
  },
  {
    path: '/registration/confirm',
    component: <LazyConfirm_reg />,
  },
  {
    path: '/profile',
    component: <LazyProfile />,
  },
];
