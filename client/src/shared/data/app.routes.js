import { APP_CONFIG as ac } from "./app.config";


const _getShortPath = (path, code) => path.replace(ac.lang.pattern, code);
const _getLongPath = (path, code) => ac.domain + '/' + _getShortPath(path, code);


export const APP_ROUTES = (code) => ({

   home: {
      short: _getShortPath(ac.path.home, code),
      long: _getLongPath(ac.path.home, code),
   },

   login: {
      short: _getShortPath(ac.path.login, code),
      long: _getLongPath(ac.path.login, code),
   },

   posters: {
      short: _getShortPath(ac.path.posters, code),
      long: _getLongPath(ac.path.posters, code),
   },

   profile: {
      short: _getShortPath(ac.path.profile, code),
      long: _getLongPath(ac.path.profile, code),
   },

   notFound: {
      short: ac.path.notFound,
      long: ac.domain + '/' + ac.path.notFound,
   },
});