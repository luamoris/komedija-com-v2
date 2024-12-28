export const CONFIG = {
   name: 'Stand Up Komedija',
   shortName: 'Komedija',
   domain: 'http://localhost:5173',
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