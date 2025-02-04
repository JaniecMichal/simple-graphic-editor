import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
			include: "**/*.svg",
		}),
		,
		tsconfigPaths(),
	],
	css: {
		postcss: {
			plugins: [tailwind, autoprefixer],
		},
	},
});
