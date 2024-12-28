import { CONFIG } from "./config";

const _LANG = 'en';

export const en = {
   HOME: {
      path: {
         short: CONFIG.path.home.replace(CONFIG.lang.pattern, _LANG),
         long: CONFIG.domain + CONFIG.path.home.replace(CONFIG.lang.pattern, _LANG),
      },
      navIcon: {
         src: '/pictures/page-icons/home.svg',
         alt: 'Home page.',
      },
      meta: {
         title: 'Home',
         description: 'Russian-speaking stand-up shows in NRW (Düsseldorf)! Comedy events poster, open mic, and tickets. Join our vibrant shows!',
         keywords: 'KOMEDIJA STANDUP, Standup komedija, Stand-up komedija, Stand up komedija, Stand-up show poster, Stand-up tickets Düsseldorf, Stand Up Community Komedija, Stand-up Düsseldorf, Stand-up NRW, Stand-up Köln, Stand-up Essen',
      }
   },
   LOGIN: {
      path: {
         short: CONFIG.path.login.replace(CONFIG.lang.pattern, _LANG),
         long: CONFIG.domain + CONFIG.path.login.replace(CONFIG.lang.pattern, _LANG),
      },
      navIcon: {
         src: '/pictures/page-icons/profile.svg',
         alt: 'Login page.',
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
         alt: 'Posters page.',
      },
      meta: {
         title: 'Posters',
         description: 'Poster of stand-up comedy events in NRW (Düsseldorf)! Find out about upcoming shows, open mics, and special events. Tickets and details are available right here.',
         keywords: 'Stand-up show Düsseldorf, Stand-up show Cologne, Comedy tickets Cologne, Comedy tickets Köln, Stand-up Köln tickets, Open mic stand-up, Stand-up poster, Stand-up Essen, Stand-up NRW',
      }
   },
   PROFILE: {
      path: {
         short: CONFIG.path.profile.replace(CONFIG.lang.pattern, _LANG),
         long: CONFIG.domain + CONFIG.path.profile.replace(CONFIG.lang.pattern, _LANG),
      },
      navIcon: {
         src: '/pictures/page-icons/profile.svg',
         alt: 'Profile page',
      },
      meta: {
         title: 'Profile',
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