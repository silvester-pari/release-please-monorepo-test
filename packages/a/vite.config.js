import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./main.js",
      name: "a",
      // the proper extensions will be added
      fileName: "a",
    },
  },
});
