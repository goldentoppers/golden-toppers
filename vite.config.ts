import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     svgr({
//       svgrOptions: {
//         // This tells SVGR to run the SVGO cleaner on every import
//         svgo: true,
//         svgoConfig: "./svgo.config.mjs",
//       },
//     }),
//     tailwindcss(),
//     babel({ presets: [reactCompilerPreset()] }),
//     react(),
//   ],
// });

export default defineConfig({
  plugins: [
    svgr({
      // Use this specific object structure for the latest versions of the plugin
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  // This is the specific one that kills the <style> tag
                  inlineStyles: {
                    onlyMatchedOnce: false,
                  },
                  // This ensures the <style> tag is physically removed after inlining
                  minifyStyles: {},
                  removeViewBox: false,
                },
              },
            },
            "prefixIds",
          ],
        },
      },
    }),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
    react(),
    ViteImageOptimizer({
      // Match your static image formats
      test: /\.(jpe?g|png|gif|tiff|webp|svg)$/i,
      // Target JPG/JPEG files specifically for WebP conversion
      jpeg: {
        quality: 80, // High quality, low file size
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: false,
        quality: 80,
      },
    }),
  ],
});
