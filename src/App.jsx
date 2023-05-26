import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalLayout from './components/layouts/globalRoutes';
import Home from './pages/Home';
import Pages from './pages/Pages';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeachersList from './pages/Teachers';
import NoticeList from './pages/Notice';

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
        { path: 'page/:slug', element: <Pages /> },
      ],
      errorElement: '<div>error</div>',
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
