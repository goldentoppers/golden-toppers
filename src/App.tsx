import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { AppLayout } from "./components/AppLayout";
import { About } from "./pages/About";
import { RecipeBook } from "./components/RecipeBook";

// --- B. THE MULTI-PAGE ROUTE GRAPH ---
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true, // Defines the default home root path view
        element: <RecipeBook />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
