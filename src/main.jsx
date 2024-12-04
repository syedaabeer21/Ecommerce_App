
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './Pages/Products.jsx'
import Layout from './Layout.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import {store} from '../src/config/redux/store/store.js';
import Cart from './Pages/Cart.jsx'
import Login from './Pages/Login.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
    {
      path:'',
      element:<Login/>
    },
    {
      path:'products',
      element:<Products/>
    },
    {
      path:'products/:id',
      element:<SingleProduct/>
    },
    {
      path:'cart',
      element:<Cart/>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

   
)
