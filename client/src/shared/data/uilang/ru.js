import { CONFIG } from "./config";

const _LANG = 'ru';

export const ru = {
   HOME: {
      path: {
         short: CONFIG.path.home.replace(CONFIG.lang.pattern, _LANG),
         long: CONFIG.domain + CONFIG.path.home.replace(CONFIG.lang.pattern, _LANG),
      },
      navIcon: {
         src: '/pictures/page-icons/home.svg',
         alt: 'Главная страница.',
      },
      meta: {
         title: 'Главная',
         description: 'Русскоязычные стендап шоу в NRW (Дюссельдорф)! Афиша комедийных мероприятий, открытый микрофон и билеты. Присоединяйтесь к нашим ярким шоу!',
         keywords: 'Комедия, Стендап, Стендап комедия, Русскоязычные комики Германия, Стендап шоу Германия, Русская комедия Германия, Юмор, Смех, Стендап NRW, Стендап Дюссельдорф, Стендап Кёльн, Стендап Кельн, Стендап Эссен, Стендап Бонн, Стендап Дортмунд',
      }
   },
   LOGIN: {
      path: {
         short: CONFIG.path.login.replace(CONFIG.lang.pattern, _LANG),
         long: CONFIG.domain + CONFIG.path.login.replace(CONFIG.lang.pattern, _LANG),
      },
      navIcon: {
         src: '/pictures/page-icons/profile.svg',
         alt: 'Страница авторизации.',
      },
      meta: {
         title: 'Войти',
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
         alt: 'Страница событий.',
      },
      meta: {
         title: 'Афиша',
         description: 'Афиша стендап-комедийных мероприятий в NRW (Дюссельдорф)! Узнайте о предстоящих шоу, open mic и специальных мероприятиях. Билеты и подробности доступны прямо здесь.',
         keywords: 'Афиша стендап комедия, Афиша комедия, Афиша Дюссельдорф, Афиша Кёльн, Афиша Кельн, Афиша стендап Дюссельдорф, Афиша стендап Кёльн, Афиша стендап Кельн, Билеты на стендап, Купить билеты на стендап, Стендап NRW, Стендап Дюссельдорф, Стендап Кёльн, Стендап Кельн, Стендап Эссен, Стендап Бонн, Стендап Дортмунд',
      }
   },
   PROFILE: {
      path: {
         short: CONFIG.path.profile.replace(CONFIG.lang.pattern, _LANG),
         long: CONFIG.domain + CONFIG.path.profile.replace(CONFIG.lang.pattern, _LANG),
      },
      navIcon: {
         src: '/pictures/page-icons/profile.svg',
         alt: 'Страница профиля.',
      },
      meta: {
         title: 'Профиль',
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