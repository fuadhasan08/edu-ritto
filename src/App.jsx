import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalLayout from './components/layouts/globalRoutes';
import Home from './pages/Home';
import Pages from './pages/Pages';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeachersList from './pages/Teachers';
import NoticeList from './pages/Notice';
import PhotoGallery from './pages/PhotoGallery';
import CulturalGallery from './pages/CulturalGallery';
import SportsGallery from './pages/SportsGallery';

const App = () => {
  const router = createBrowserRouter([
    {
      element: <GlobalLayout />,
      path: '/',
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'page/teachers-list',
          element: <TeachersList />,
        },
        {
          path: 'page/notices',
          element: <NoticeList />,
        },
        {
          path: 'page/photo-gallery',
          element: <PhotoGallery />,
        },
        {
          path: 'page/cultural-gallery',
          element: <CulturalGallery />,
        },
        {
          path: 'page/sports',
          element: <SportsGallery />,
        },
        { path: 'page/:slug', element: <Pages /> },
      ],
      errorElement: '<div>error</div>',
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
