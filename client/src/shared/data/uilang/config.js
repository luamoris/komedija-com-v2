export const CONFIG = {
   name: 'Stand Up Komedija',
   shortName: 'Komedija',
   domain: 'beta.skomedija.com', // ЗАМЕНИТЬ НА ОРИГИНАЛЬНЫЙ ДОМЕН
   lang: {
      pattern: ':lang',
   },
   path: {
      home: '/:lang',
      login: '/:lang/auth',
      posters: '/:lang/posters',
      profile: '/:lang/profile',
      e404: '*',
   },
};