import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store, { persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Analytic from './Views/Analityc';
import PageNotFound from './Views/PageNotFound';
import Settings from './Views/Settings';
import User from './Views/User';
import Chart from './Views/Chart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "analytic",
        element: <Analytic />,
        children: [
          {
            path: "chart",
            element: <Chart />
          }
        ]
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
