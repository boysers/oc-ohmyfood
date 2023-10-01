import { defineConfig } from "vite";
import { resolve } from "node:path";

const root = resolve(__dirname, "src");
const publicDir = resolve(__dirname, "public");
const outDir = resolve(__dirname, "dist");
const restaurantsDir = resolve(root, "restaurants");

export default defineConfig({
	root,
	publicDir,
	base:
		process.env.NODE_ENV === "production"
			? "https://boysers.github.io/oc-ohmyfood"
			: "/",
	build: {
		rollupOptions: {
			input: {
				main: resolve(root, "index.html"),
				"a-la-francaise": resolve(
					restaurantsDir,
					"a-la-francaise.html"
				),
				"la-note-enchantee": resolve(
					restaurantsDir,
					"la-note-enchantee.html"
				),
				"la-palette-du-gout": resolve(
					restaurantsDir,
					"la-palette-du-gout.html"
				),
				"le-délice-des-sens": resolve(
					restaurantsDir,
					"le-délice-des-sens.html"
				),
			},
		},
		outDir,
	},
});
