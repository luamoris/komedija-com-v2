import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { PAGE_PATH } from "../data/uilang/path.js";
import {CONFIG} from "../data/uilang/config.js";
import { LANG } from "../data/uilang/lang.js";


const getInitialLanguage = () => {

   const isCode = (code) => code && CONFIG.lang.supported.includes(code);

   // Browser Path
   const browserCode = window.location.pathname.split('/')[1];
   if (isCode(browserCode)) return browserCode;

   // Local Storage
   const savedCode = localStorage.getItem('language');
   if (isCode(savedCode)) return savedCode;

   // Localize Path
   const localCode = navigator.language.split("-")?.[0];
   if (isCode(localCode)) return localCode;

   return CONFIG.lang.default;
}

const getPath = PAGE_PATH;


export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
   const [code, setCode] = useState(getInitialLanguage());
   const [localizedPath, setLocalizedPath] = useState(getPath(code));

   useEffect(() => {
      setLocalizedPath(getPath(code));
      localStorage.setItem('language', code);
      document.documentElement.lang = code;
   }, [code]);

   return (
      <LanguageContext.Provider value={
         {
            CODE: code,
            SET_CODE: setCode,
            ROUTES: localizedPath,
            TL: LANG[code]
         }
      }>
         {children}
      </LanguageContext.Provider>
   )
};

LanguageProvider.propTypes = {
   children: PropTypes.node.isRequired,
};