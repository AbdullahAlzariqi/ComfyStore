import {
  About, Cart, Register, HomeLayout, Checkout, Orders,
  Products, SingleProduct, Login, Landing, Error
} from './pages'

import { ErrorElement } from './components';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as productsLoader } from './pages/Products';
import { loader as CheckoutLoader } from './pages/Checkout';
import { loader as orderLoader } from './pages/Orders';



//actions
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as checkoutAction } from './components/CheckoutForm';
import { store } from './store';
store


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5 //in melliseconds 
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient),
      },
      {
        path: "/orders",
        element: <Orders />,
        loader: orderLoader(store, queryClient)
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
        loader: CheckoutLoader(store),
        action: checkoutAction(store, queryClient)
      },
      {
        path: "/products",
        element: <Products />,
        errorElement: <Error />,
        loader: productsLoader(queryClient),
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        errorElement: <Error />,
        loader: singleProductLoader(queryClient),
      },
    ]
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store)
  },
]);

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
