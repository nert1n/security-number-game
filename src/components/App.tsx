import { Route, Routes } from 'react-router-dom';
import Footer from '@/components/UI/Footer/Footer';
import Header from '@/components/UI/Header/Header';
import { publicRoutes } from '@/router/index';
import { Suspense } from 'react';

export function App() {
    return (
        <>
            <Header/>
              <div className='response'>
                <Routes>
                  {publicRoutes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={<Suspense fallback={'Loading...'}>{route.component}</Suspense>}
                    />
                  ))}
                </Routes>
              </div>
            <Footer/>
        </>
    )
}

