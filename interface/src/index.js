import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import routes from "./routes";

const App = lazy(() => import("./App" /* webpackChunkName: 'App' */));
const Analytic = lazy(() => import("./Views/Analityc" /* webpackChunkName: 'Analytic' */));
const Settings = lazy(() => import("./Views/Settings" /* webpackChunkName: 'Settings' */));
const User = lazy(() => import("./Views/User" /* webpackChunkName: 'User' */));
const PageNotFound = lazy(() =>
  import("./Views/PageNotFound" /* webpackChunkName: 'PageNotFound' */)
);
const CommonDashBoard = lazy(() =>
  import("./Views/CommonDashBoard" /* webpackChunkName: 'CommonDashBoard' */)
);

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: routes.analytics,
        element: <Analytic />,
      },
      {
        path: routes.dashBoard,
        element: <CommonDashBoard />,
      },
      {
        path: routes.settings,
        element: <Settings />,
      },
      {
        path: routes.user,
        element: <User />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
