import { PawPrintLabel } from "./PawPrintLabel";

export const QuickStartPanel = () => {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8">
      <div className="select-none" role="region" aria-label="Quick Start Instructions">
        {/* THREE-STEP HORIZONTAL PIPELINE */}
        <ol className="m-0 grid list-none grid-cols-1 text-left sm:grid-cols-3" role="list">
          {/* STEP 1 */}
          <li className="clear-both block text-left sm:pr-4">
            <div className="b clear-both block h-full w-full sm:pr-3 sm:pl-4">
              <div className="float-left mr-3">
                <PawPrintLabel>
                  <span
                    className="pt-2 pl-2 font-mono text-[16px] leading-none font-black
                      tracking-tight text-stone-900"
                  >
                    1
                  </span>
                </PawPrintLabel>
              </div>
              <h4 className="mt-1 text-[12px] font-black tracking-wider text-stone-800 uppercase">
                Set Target
              </h4>
              <p className="w-full text-[12px] leading-normal font-semibold text-stone-800">
                Input your dog's weight below to lock in a safe daily topper calorie limit.
              </p>
            </div>
          </li>

          {/* STEP 2 */}
          <li className="clear-both block w-full pt-4 text-left sm:mx-2 sm:pt-0">
            <div className="float-left mr-3">
              <PawPrintLabel>
                <span
                  className="pt-2 pl-2 font-mono text-[16px] leading-none font-black tracking-tight
                    text-stone-900"
                >
                  2
                </span>
              </PawPrintLabel>
            </div>

            <h4 className="mt-1 text-[12px] font-black tracking-wider text-stone-800 uppercase">
              Build Mix
            </h4>

            <p className="w-full text-[12px] leading-normal font-semibold text-stone-800">
              Browse through sections to select whole-food proteins, grains, and vibrant colors.
            </p>
          </li>

          {/* STEP 3 */}
          <li className="clear-both block w-full pt-4 pl-0 text-left sm:pt-0 md:pl-3">
            <div className="clear-both block h-full w-full sm:pl-6">
              <div className="float-left mr-3">
                <PawPrintLabel>
                  <span
                    className="pt-2 pl-2 font-mono text-[16px] leading-none font-black
                      tracking-tight text-stone-900"
                  >
                    3
                  </span>
                </PawPrintLabel>
              </div>

              <h4 className="mt-1 text-[12px] font-black tracking-wider text-stone-800 uppercase">
                Print Sheet
              </h4>

              <p className="w-full text-[12px] leading-normal font-semibold text-stone-800">
                Review your finalized recipe and print a clean, scale-ready kitchen sheet.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};
