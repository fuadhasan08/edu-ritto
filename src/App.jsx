import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalLayout from './components/layouts/globalRoutes'
import Home from './pages/Home'
import Pages from './pages/Pages'

const App = () => {
  const router = createBrowserRouter([
    {
      element: <GlobalLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        { path: '/page/:slug', element: <Pages /> },
      ],
      errorElement: 'Error',
    },
  ])

  return <RouterProvider router={router} />
}

export default App
