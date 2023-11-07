/*
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-04-19 23:06:38
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-11-04 23:28:25
 * @FilePath: /blog-web/tailwind.config.js
 */
/** @type {import('tailwindcss').Config} */

const spacing = {
  0: 0,
  2: '2px',
  4: '4px',
  8: '8px',
  10: '10px',
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  20: '20px',
  30: '30px',
  40: '40px'
};
const colors = {
  'high-color': '#1f2d3d',
  'white-color': '#fff',
  'font-color': '#4c4948',
  'a-hover': '#49b1f5;',
  'btn-color': '#49b1f5',
  'desc-color': '#858585'
};
const fontFamily = {
  'sans': ['Titillium Web', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft JhengHei', 'Microsoft YaHei', 'sans-serif'],
};
const screens = {
    'smMin': {'min': '640px'},
    // => @media (min-width: 640px) { ... }
    'mdMin': {'min': '768px'},
    // => @media (min-width: 768px) { ... }
    'lgMin': {'min': '1024px'},
    // => @media (min-width: 1024px) { ... }
    'xlMin': {'min': '1280px'},
    // => @media (min-width: 1280px) { ... }
    'smMax': {'max': '640px'},
    // => @media (max-width: 640px) { ... }
    'mdMax': {'max': '768px'},
    // => @media (max-width: 768px) { ... }
    'lgMax': {'max': '1024px'},
    // => @media (max-width: 1024px) { ... }
    'xlMax': {'max': '1280px'},
    // => @media (max-width: 1280px) { ... }
}
module.exports = {
  important: true,
  content: [],
  theme: {
    extend: {
      spacing,
      colors,
      screens,
      fontFamily
    },
    colors
  },
  plugins: []
}