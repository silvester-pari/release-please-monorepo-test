import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./main.js",
      name: "b",
      // the proper extensions will be added
      fileName: "b",
    },
  },
});
