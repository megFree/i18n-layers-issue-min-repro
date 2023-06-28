export default defineNuxtConfig({
  ssr: false,
  extends: ["../base"],
  // if I add this section and remove my plugin init-i18n, all works fine
  // i18n: {
  //   baseUrl: "/",
  //   defaultLocale: "en",
  //   seo: false,
  //   locales: [
  //     { code: "en", iso: "en", name: "English (en)", fallback: "en" },
  //     { code: "pt", iso: "pt", name: "Portuguese (pt)", fallback: "en" },
  //   ],
  //   detectBrowserLanguage: false,
  // },
});
