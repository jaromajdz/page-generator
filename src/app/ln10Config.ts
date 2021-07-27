import { L10nConfig, L10nLoader } from 'angular-l10n';

import { i18nAsset } from './i18n';

export const l10nConfig: L10nConfig = {
  format: 'language-region',
  providers: [{ name: 'app', asset: i18nAsset }],
  cache: true,
  keySeparator: '.',
  defaultLocale: {
    language: 'de-CH',
    currency: 'CHF',
    timeZone: 'Europe/Busingen'
  },
  schema: [
    {
      locale: {
        language: 'en-US',
        currency: 'USD',
        timeZone: 'America/Los_Angeles'
      },
      dir: 'ltr',
      text: 'United States'
    },
    {
      locale: { language: 'de-CH', currency: 'CHF', timeZone: 'Europe/Busingen' },
      dir: 'ltr',
      text: 'Swiss'
    }
  ]
};

export function initL10n(l10nLoader: L10nLoader): () => Promise<void> {
  return () => l10nLoader.init();
}
