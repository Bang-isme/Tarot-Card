/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        '1100': '1100px',
      },
      colors: { 
        primary: '#FFFFFF',      // Trắng
        secondary1: '#C0C0C0',   // Xám bạc
        secondary2: '#EEEEEE',   // Xám nhạt
        customPurple: '#4B0082', // Ví dụ: thêm màu tím đậm
        customGold: '#FFD700',   // Ví dụ: thêm màu vàng
      },
    },
  },
  plugins: [],
};