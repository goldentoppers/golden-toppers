// Maps breed names / SVG file keys to their resolved static asset URLs via Vite
const rawSvgModules = import.meta.glob<string>(
    "../assets/art/dog-breeds/*.svg",
    { eager: true, import: "default" }
);

export const breedSvgMap: Record<string, string> = {};
const normalizedSvgMap: Record<string, string> = {};

function normalizeKey(str: string): string {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

for (const [path, url] of Object.entries(rawSvgModules)) {
    const filename = path.split("/").pop()?.replace(".svg", "") || "";
    breedSvgMap[filename] = url;
    normalizedSvgMap[normalizeKey(filename)] = url;
}

export function getBreedSvgUrl(keyOrName?: string): string | undefined {
    if (!keyOrName) return undefined;
    if (breedSvgMap[keyOrName]) {
        return breedSvgMap[keyOrName];
    }
    const norm = normalizeKey(keyOrName);
    return normalizedSvgMap[norm];
}
