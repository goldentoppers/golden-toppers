import { Outlet } from "react-router-dom";
import { AppHeader } from "./AppHeader";

export const MainContent: React.FC = () => {
  return (
    <main
      id="main-content"
      className="relative z-10 flex w-full flex-1 flex-col justify-start"
      role="main"
    >
      <div className="mx-auto w-full max-w-5xl space-y-5 px-8 pt-8">
        <AppHeader />

        <div className="w-full">
          <div className="mx-auto mt-12 pb-2">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};
