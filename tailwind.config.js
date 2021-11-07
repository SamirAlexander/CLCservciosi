// tailwind.config.js
  module.exports = {
    purge: [],
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        colorclc: {
          light: "#374151",
          DEFAULT: "#355270",
          dark: "#009eeb",
        },
        white: {
          light: "#85d7ff",
          DEFAULT: "#f0feee",
          dark: "#009eeb",
        },
      },
      extend: {
        backgroundImage: {
          "footer-texture": "url('media/texturaFooter.png')",
          "footer-texture-car": "url('media/vehiculo.jpg')",
          "footer-texture-cab": "url('media/cabezote.jpg')",
          "footer-texture-paj": "url('media/pajarita.jpg')",
          "footer-texture-rad": "url('media/radiador.jpg')",
          "footer-texture-air": "url('media/aireAcond.png')",
          "footer-texture-tap": "url('media/tapiceria.jpg')",
          "footer-texture-clt": "url('media/clientes.png')",
          "footer-texture-clt1": "url('media/clientes1.jpg')",
          "footer-texture-clt2": "url('media/clientes2.jpg')",
          "footer-texture-car2": "url('media/headerPagina.jpg')",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };