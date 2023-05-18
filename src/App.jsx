import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalLayout from './components/layouts/globalRoutes'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
    errorElement: 'Error 404',
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
