export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "dev-endemik",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon32.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/section.less"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vueAnimXYZ.js" },
    { src: "~/plugins/vueAwesome.js" },
    { src: "~/plugins/both.js" },
    { src: "~/plugins/client.js", mode: "client" },
    { src: "~/plugins/mixins.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-gsap-module"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    presets: [
      ["@babel/preset-env config", { loose: true }],
      ["@babel/plugin-proposal-private-methods", { loose: true }],
    ],
    transpile: [
      // 'vee-validate/dist/rules',
      /^vue-awesome/,
    ],
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: "/coleccion/detalle",
        components: {
          default: resolve(__dirname, "pages/coleccion-interior.vue"), // or routes[index].component
        },
      });
    },
  },
  gsap: {
    extraPlugins: { scrollTo: true },
  },
};
