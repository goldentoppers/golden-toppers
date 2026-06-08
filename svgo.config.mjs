export default {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // This is the magic part: it converts <style> to inline attributes
          inlineStyles: {
            onlyMatchedOnce: false,
          },
          // This removes the <style> block entirely after inlining
          minifyStyles: true,
        },
      },
    },
    // This ensures every SVG gets a unique prefix for any remaining IDs
    "prefixIds",
  ],
};
