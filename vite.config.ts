import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";
import vue from "@vitejs/plugin-vue";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import { VitePWA } from "vite-plugin-pwa";

const plugins = [
	vue(),
	svgLoader(),
	wasm(),
	topLevelAwait(),
];

if (!process.env.TAURI_PLATFORM) {
	plugins.push(VitePWA());
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins,
	base: process.env.TAURI_PLATFORM ? "/" : "./",

	// Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
	// prevent vite from obscuring rust errors
	clearScreen: false,
	// tauri expects a fixed port, fail if that port is not available
	server: {
		port: 1420,
		strictPort: true,
	},
	// to make use of `TAURI_DEBUG` and other env variables
	// https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
	envPrefix: ["VITE_", "TAURI_"],
	build: process.env.TAURI_PLATFORM
		? {
				// Tauri supports es2021
				target:
					process.env.TAURI_PLATFORM === "windows" ? "chrome105" : "safari13",
				// don't minify for debug builds
				minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
				// produce sourcemaps for debug builds
				sourcemap: !!process.env.TAURI_DEBUG,
		  }
		: undefined,
});
