import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';

import App from './App.jsx';
import HomeScreen from './screens/HomeScreen.jsx'; // ✅ Make sure this path is correct
import ProductScreen from './screens/ProductScreen';
// ✅ Define the routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/product/:id' element={< ProductScreen />} />
    </Route>
  )
);

// ✅ Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
