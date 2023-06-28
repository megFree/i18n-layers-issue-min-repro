import { defineNuxtModule } from '@nuxt/kit'
// Module options TypeScript interface definition
export interface ModuleOptions {
  strapiUrl: string | undefined;
  apiBaseUrl: string | undefined;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'init-i18n',
    configKey: 'init-i18n'
  },
  async setup(options, nuxt) {
    const params = {
      baseUrl: '/',
      defaultLocale: 'en',
      seo: false,
      locales:
        [{ code: 'en', iso: 'en', name: 'English (en)', fallback: 'en' },
        { code: 'pt', iso: 'pt', name: 'Portuguese (pt)', fallback: 'en' }],
      detectBrowserLanguage: false
    };
    nuxt.options.i18n = params;
  }
})
