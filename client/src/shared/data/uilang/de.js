import { CONFIG } from "./config";

const _LANG = 'de';

export const de = {
   HOME: {
      path: {
         short: CONFIG.path.home.replace(CONFIG.lang.pattern, _LANG),
         long: CONFIG.domain + CONFIG.path.home.replace(CONFIG.lang.pattern, _LANG),
      },
      navIcon: {
         src: '/pictures/page-icons/home.svg',
         alt: 'Home Seit.',
      },
      meta: {
         title: 'Home',
         description: 'Russischsprachige Stand-up-Shows in NRW (Düsseldorf)! Comedy-Veranstaltungskalender, Open Mic und Tickets. Schließen Sie sich unseren lebhaften Shows an!',
         keywords: 'Comedy Düsseldorf, Comedy Köln, Humor, Lachen, Stand-up Düsseldorf, Stand-up NRW, Stand-up Essen',
      }
   },
   LOGIN: {
      path: {
         short: CONFIG.path.login.replace(CONFIG.lang.pattern, _LANG),
         long: CONFIG.domain + CONFIG.path.login.replace(CONFIG.lang.pattern, _LANG),
      },
      navIcon: {
         src: '/pictures/page-icons/profile.svg',
         alt: 'Anmelde Seit.',
      },
      meta: {
         title: 'Login',
         description: '',
         keywords: '',
      }
   },
   POSTERS: {
      path: {
         short: CONFIG.path.posters.replace(CONFIG.lang.pattern, _LANG),
         long: CONFIG.domain + CONFIG.path.posters.replace(CONFIG.lang.pattern, _LANG),
      },
      navIcon: {
         src: '/pictures/page-icons/poster.svg',
         alt: 'Veranstaltungen Seit',
      },
      meta: {
         title: 'Posters',
         description: 'Plakat der Stand-up-Comedy-Veranstaltungen in NRW (Düsseldorf)! Erfahren Sie mehr über bevorstehende Shows, Open Mics und besondere Events. Tickets und Details finden Sie hier.',
         keywords: 'Comedy Düsseldorf, Comedy Köln, Comedy Cologne, Stand-up Düsseldorf, Stand-up Essen, Stand-up NRW',
      }
   },
   PROFILE: {
      path: {
         short: CONFIG.path.profile.replace(CONFIG.lang.pattern, _LANG),
         long: CONFIG.domain + CONFIG.path.profile.replace(CONFIG.lang.pattern, _LANG),
      },
      navIcon: {
         src: '/pictures/page-icons/profile.svg',
         alt: 'Profil Seit.',
      },
      meta: {
         title: 'Profil',
         description: '',
         keywords: '',
      }
   },
   NOTFOUND: {
      path: {
         short: CONFIG.path.e404,
         long: CONFIG.domain + '/' + CONFIG.path.e404,
      },
      navIcon: {
         src: '',
         alt: '',
      },
      meta: {
         title: '404',
         description: '404',
         keywords: '404',
      }
   },
};