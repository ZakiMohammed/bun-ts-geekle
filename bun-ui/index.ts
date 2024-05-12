await Bun.build({
  entrypoints: ["./src/main.ts"],
  outdir: "./dist",
  minify: true,
  plugins: [],
});
