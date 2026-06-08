import React, { useEffect, useState } from "react";
import { PrintedRecipeTemplate } from "./PrintedRecipeTemplate";
import { AppFooter } from "./AppFooter";
import { GlobalControlOptionsProvider } from "../contexts/GlobalControlOptionsProvider";
import { INGREDIENT_LIBRARY } from "../data/ingredients";
import { MobileNav } from "./MobileNav";
import dogHero from "../assets/hero-dog-with-carrots.jpg";
import { MainContent } from "./MainContent";
import { AssetIcon } from "./AssetIcon";
import kitchenHero from "../assets/hero-woman-and-dog-in-kitchen.jpg";

export const AppLayout: React.FC = () => {
  const [isImageDownloaded, setIsImageDownloaded] = useState<boolean>(false);
  const [isTimerCleared, setIsTimerCleared] = useState<boolean>(false);

  const isAssetLoading = !isImageDownloaded || !isTimerCleared;

  useEffect(() => {
    // PRELOAD HOOK INJECTION
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.href = dogHero;
    document.head.appendChild(preloadLink);

    const delayTimer = setTimeout(() => {
      setIsTimerCleared(true);
    }, 1000);

    const img = new Image();
    img.src = dogHero;

    const dynamicPreloadForKitchenHero = new Image();
    dynamicPreloadForKitchenHero.src = kitchenHero;

    if (img.complete) {
      requestAnimationFrame(() => setIsImageDownloaded(true));
    } else {
      // Toggles true ONLY when the browser has 100% finished downloading every pixel
      img.onload = () => setIsImageDownloaded(true);
      img.onerror = () => setIsImageDownloaded(true); // Safety fallback keeps user from getting stuck
    }

    return () => {
      clearTimeout(delayTimer);
      if (document.head.contains(preloadLink)) {
        document.head.removeChild(preloadLink);
      }
    };
  }, []);
  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden bg-[#f5f2eb] font-sans
        text-stone-900 antialiased select-none print:overflow-visible print:bg-white print:p-0
        print:text-black"
    >
      <div
        className={`pointer-events-none fixed inset-0 z-50 hidden flex-col items-center
          justify-center space-y-4 bg-stone-50 text-center transition-all duration-700 ease-in-out
          select-none md:flex ${
            isAssetLoading ? "opacity-100" : "pointer-events-none scale-105 opacity-0"
          }`}
        role="status"
        aria-live="polite"
        aria-label="Loading Golden Toppers Recipe Builder..."
      >
        <div className="flex animate-pulse flex-col items-center space-y-4 text-amber-500">
          <div className="text-center">
            <AssetIcon name="laying-down-head-up-side-profile" className="h-20 w-20" />
          </div>
          <div className="space-y-1">
            <h2 className="font-serif text-2xl font-black tracking-tight text-stone-900 italic">
              Golden Toppers
            </h2>
            <span className="block text-[9px] font-black tracking-[0.3em] text-stone-400 uppercase">
              Opening Recipe Builder...
            </span>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute top-0 left-0 z-0 h-72 w-full overflow-hidden
          select-none print:hidden"
      >
        <img
          src={dogHero}
          onLoad={() => setIsImageDownloaded(true)}
          alt=""
          className="h-full w-full object-cover object-[75%_15%] mix-blend-normal transition-all
            duration-500"
        />

        <div
          className="absolute inset-0 h-full w-full bg-linear-to-b from-transparent via-[#f5f2eb]/30
            to-[#f5f2eb]"
          aria-hidden="true"
        />
      </div>

      <div
        className="backdrop-blur-3xs relative z-10 flex w-full grow flex-col md:min-h-screen
          print:static print:block print:w-full print:bg-none print:p-0 print:backdrop-blur-none"
        role="none"
      >
        <GlobalControlOptionsProvider allIngredients={INGREDIENT_LIBRARY}>
          {/* EMBEDDED PRINT PAPER TEMPLATE LAYER: Handles custom paper output layout */}
          <PrintedRecipeTemplate />

          <div className="w-full grow print:hidden">
            <MainContent />
          </div>

          <div className="w-full print:hidden">
            <AppFooter backgroundImage={dogHero} />
            <div className="block md:hidden">
              <MobileNav />
            </div>
          </div>
        </GlobalControlOptionsProvider>
      </div>
    </div>
  );
};
