import {CONFIG} from "./config.js";

export  function  PAGE_PATH(_CODE) {

    const _getShort = (path) => path.replace(CONFIG.lang.pattern, _CODE);
    const _getLong = (path) => CONFIG.domain + _getShort(path);

    return {
        HOME: {
            path: {
                short: _getShort(CONFIG.path.home),
                long: _getLong(CONFIG.path.home)
            }
        },
        LOGIN: {
            path: {
                short: _getShort(CONFIG.path.login),
                long: _getLong(CONFIG.path.login)
            }
        },
        POSTERS: {
            path: {
                short: _getShort(CONFIG.path.posters),
                long: _getLong(CONFIG.path.posters)
            }
        },
        PROFILE: {
            path: {
                short: _getShort(CONFIG.path.profile),
                long: _getLong(CONFIG.path.profile)
            }
        },
        NOTFOUND: {
            path: {
                short: CONFIG.path.e404,
                long: CONFIG.domain + '/' + CONFIG.path.e404
            }
        }
    };
}
