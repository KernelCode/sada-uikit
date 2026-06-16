import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import { I18nProvider } from "./i18n";
import { Layout } from "./routes/layout";
import { Landing } from "./routes/landing";
import { Articles } from "./routes/articles";
import { Podcasts } from "./routes/podcasts";
import { Showcase } from "./routes/showcase";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/articles", element: <Articles /> },
        { path: "/podcasts", element: <Podcasts /> },
        { path: "/components", element: <Showcase /> },
      ],
    },
  ],
  // Works at "/" in dev and under any subpath when built with --base=.
  { basename: import.meta.env.BASE_URL },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nProvider>
      <RouterProvider router={router} />
    </I18nProvider>
  </React.StrictMode>,
);
