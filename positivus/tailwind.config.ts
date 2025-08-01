import type { Config } from "tailwindcss";

export default {
    darkMode: ["variant"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		// colors: {
  		// 	background: 'var(--background)',
  		// 	foreground: 'var(--foreground)'
  		// },
  		// borderRadius: {
  		// 	lg: 'var(--radius)',
  		// 	md: 'calc(var(--radius) - 2px)',
  		// 	sm: 'calc(var(--radius) - 4px)'
  		// }
		  colors: {
			primary: '#b9ff66', // Your default background color
			secondary: '#191a23',
			tertiary: '#F3F3F3', // Your default text color
		  },
  	}
  },
//   plugins: [require("tailwindcss-animate")],
} satisfies Config;
