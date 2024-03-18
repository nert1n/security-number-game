import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import '@/styles/style.scss';
import { publicRoutes } from '@/router';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root)

const router = createHashRouter([
    {
        path: '/',
        element: <StrictMode><App/></StrictMode>,
        children: publicRoutes,
    }
])

container.render(<RouterProvider router={router} />);