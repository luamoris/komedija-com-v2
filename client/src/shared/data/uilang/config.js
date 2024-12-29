export const CONFIG = {
   name: 'Stand Up Komedija',
   shortName: 'Komedija',
   domain: 'https://beta.skomedija.com', // ЗАМЕНИТЬ НА ОРИГИНАЛЬНЫЙ ДОМЕН
   lang: {
      pattern: ':lang',
      default: 'ru',
      supported: ['ru', 'en', 'de'],
      country: 'DE',
   },
   path: {
      home: '/:lang',
      login: '/:lang/auth',
      posters: '/:lang/posters',
      profile: '/:lang/profile',
      e404: '*',
   },
   og: {
      type: {
         home: 'website',
         login: 'website',
         posters: 'website',
         profile: 'website',
         e404: 'website',
      }
   }
};