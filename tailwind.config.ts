import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: { extend: { colors: { bg:"#0a0b10", panel:"#11131a", panel2:"#171a22", line:"#252a35", text:"#f3f5f7", muted:"#9ea6b5", lime:"#b8ff3b", pink:"#ff5ca8", cyan:"#66e3ff", orange:"#ff9f43" } } },
  plugins: []
};
export default config;
