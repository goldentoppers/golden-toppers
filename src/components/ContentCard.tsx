import { AssetIcon } from "./AssetIcon";

export const ContentCard = ({ title, children, icon, iconSize, align }: { title?: string; children: React.ReactNode; icon?: string; iconSize?: string; align?: string; }) => {
  return (
    <div
      className="mx-auto w-full max-w-4xl rounded-2xl border border-stone-900/10 bg-white/70
          p-8 shadow-[0_8px_28px_rgba(28,25,23,0.08)] sm:px-10 sm:py-10"
    >
      {title && (
        <div className="flex items-center justify-center gap-4">
          {icon ? <AssetIcon name={icon} color="#b45309" className={iconSize ? iconSize : "h-16 w-16"} /> : null}
          <h2 className={`${align || "text-center"} font-serif text-3xl leading-tight font-black tracking-wide text-stone-900 italic`}>
            {title}
          </h2>
        </div>
      )}

      <div className="flex flex-col mt-6 justify-center text-center gap-3">
        {children}
      </div>
    </div>

  );
};
