import { Route, Routes } from 'react-router-dom';
import Footer from '@/components/UI/Footer/Footer';
import Header from '@/components/UI/Header/Header';
import { publicRoutes } from '@/router/index';
import { Suspense, useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { auth } from '@/actions/user';

export function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(auth())
  }, [])
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

