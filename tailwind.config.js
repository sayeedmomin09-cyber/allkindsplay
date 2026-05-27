export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        sunshine: '#FFE14D',
        coral: '#FF4D5E',
        aqua: '#13D5FF',
        grape: '#5C3CFF',
        ink: '#10143A',
      },
      boxShadow: {
        glow: '0 24px 90px rgba(19, 213, 255, 0.35)',
        premium: '0 24px 80px rgba(16, 20, 58, 0.18)',
      },
    },
  },
  plugins: [],
};
