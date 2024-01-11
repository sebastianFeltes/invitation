/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			customPastel: "#FFF8F2",
			customPastel2: "#FFF2EC",
			customPastel3: "#FFF7F1",
			customGreen: "#527853",
			customAccent: "#F7B787",
			customRed: "#aa0000",
		},
	},
	plugins: [require("daisyui")],
};
