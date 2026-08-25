import { Outlet } from "react-router-dom";
import { AppHeader } from "./AppHeader";

export const MainContent: React.FC = () => {
  return (
    <main id="main-content" className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-4 sm:px-8">
      <AppHeader />

      <div className="relative z-20 mt-4 overflow-visible px-4">
        <div className="relative z-10 w-full">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
