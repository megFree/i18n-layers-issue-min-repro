export default defineNuxtConfig({
  modules: [
    // if I remove this and add i18n key config in "extends" project, all works fine
    "init-i18n",

    "@nuxtjs/i18n",
  ],
});
