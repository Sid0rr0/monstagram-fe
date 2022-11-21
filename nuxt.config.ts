import eslintPlugin from "vite-plugin-eslint"

export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: "m-0"
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/static/images/icons/favicon.ico" }
      ]
    }
  },
  modules: ["@nuxtjs/tailwindcss"],
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
  runtimeConfig: { // The private keys which are only available within server-side
    // https://v3.nuxtjs.org/guide/features/runtime-config/#environment-variables
    public: { // Keys within public, will be also exposed to the client-side
      staticAssets: "/static"
    }
  }
})
