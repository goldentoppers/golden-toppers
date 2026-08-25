import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { AppLayout } from "./components/AppLayout";
import { About } from "./pages/About";
import { RecipeBook } from "./components/RecipeBook";
import { DesktopNav } from "./components/DesktopNav";
import { IngredientSearch } from "./pages/IngredientSearch";

// --- B. THE MULTI-PAGE ROUTE GRAPH ---
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true, // Defines the default home root path view
        element: <div className="flex flex-col gap-8"><DesktopNav /><RecipeBook /></div>,
      },
      {
        path: "about",
        element: <div className="flex flex-col gap-8"><DesktopNav /><About /></div>,
      },
      {
        path: "ingredients",
        element: <div className="flex flex-col gap-8"><DesktopNav /><IngredientSearch /></div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
