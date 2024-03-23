
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0802a3',
        warning: '#ff731d',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0802a3",
          "secondary": "#46448c",
          "accent": "#d6dbf2",
          "neutral": "#040446",
          "base-100": "#c1c1ef",
          "info": "#ff731d",
          "success": "#ffa268",
          "warning": "#ff6b00",
          "error": "#c55f14"
        },
      },
    ],
  },
  plugins: [daisyui],
}

