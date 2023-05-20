import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalLayout from './components/layouts/globalRoutes'
import Home from './pages/Home'
import Pages from './pages/Pages'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
        { path: 'page/:slug', element: <Pages /> },
      ],
      errorElement: '<div>error</div>',
    },
  ])

  return <RouterProvider router={router} />
}

export default App
