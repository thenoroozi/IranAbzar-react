/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            "primary": "#FF5023",
         },
         fontFamily: {
            'Yekan': ['YekanBakh-Regular'],
            'Yekan-Medium': ['YekanBakh-Medium'],
            'Yekan-Light': ['YekanBakh-Light'],
            'Yekan-Thin': ['YekanBakh-Thin'],
            'Yekan-Bold': ['YekanBakh-Bold'],
            'Yekan-Heavy': ['YekanBakh-Heavy'],
         }
      },
   },
   plugins: [],
}

