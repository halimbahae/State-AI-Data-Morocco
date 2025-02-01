/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  background: "#0F0F0F", // Dark Black
			  
			  card: "#1A1A1A", // Slightly lighter black
			  primary: "#18D992", // Neon Green
			  secondary: "#A3F7BF", // Light Green
			  text: "#E5E7EB", // Light Grayish White
			  border: "#2C2C2C", // Dark Gray
			  gradientStart: "#2C5364",
			  gradientMiddle: "#203A43",
			  gradientEnd: "#0F2027",
			  card:'#c8ffb0'
			},
			// Optional: Adding custom gradients
			backgroundImage: {
				'gradient-to-b': 'linear-gradient(to bottom, #0F0F0F, #0F1F1F)', // Dark Black to Dark Green
				'gradient-to-r': 'linear-gradient(to right, #0F0F0F, #0F1F1F)',
				'gradient-to-t': 'linear-gradient(to top, ##A3F7BF, #fffff)',
					}
		  },
	},
	plugins: [],
}
