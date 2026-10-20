import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About/About';
import AlbumPage from './pages/AlbumPage';
import Discography from './pages/Discography/Discography';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'coleccion', element: <Discography /> },
      { path: 'banda', element: <About /> },
      { path: 'disco/:id', element: <AlbumPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
