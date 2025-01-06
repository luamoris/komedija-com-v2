export const APP_CONFIG = {
   name: 'Stand Up Komedija',
   shortName: 'Komedija',
   domain: 'https://beta.skomedija.com', // ЗАМЕНИТЬ НА ОРИГИНАЛЬНЫЙ ДОМЕН
   lang: {
      pattern: ':lang',
      default: 'ru',
      supported: ['ru', 'en', 'de'],
      country: 'DE',
      localStorageName: 'language'
   },
   path: {
      home: '/:lang',
      login: '/:lang/login',
      posters: '/:lang/posters',
      profile: '/:lang/profile',
      notFound: '*',
   },
   og: {
      type: {
         home: 'website',
         login: 'website',
         posters: 'website',
         profile: 'website',
         notFound: 'website',
      }
   }
};

