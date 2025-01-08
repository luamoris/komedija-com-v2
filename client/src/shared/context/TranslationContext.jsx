import { createContext, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import Translation from "../lib/Translation";

import { APP_CONFIG as ac } from "../data/app.config";
import { APP_TRANSLATION as at } from "../data/app.translation";


const translation = new Translation(at, ac.lang);
export const TranslationContext = createContext(null);
export const TranslationActionContext = createContext(null);


export const TranslationProvider = ({ children }) => {
   const [code, setCode] = useState(translation.getCurrentCode());

   const codeUpdate = useCallback((code) => {
      console.log(`\n\nUpdated language: ${code}`);
      const newCode = translation.setCode(code);
      setCode(() => newCode)
   }, []);

   const value = useMemo(() => ({ CODE: code, TRANSLATION: translation }), [code]);
   const actions = useMemo(() => ({ SET_UPDATE: codeUpdate }), [codeUpdate]);

   console.log("TranslationProvider");

   return (
      <TranslationContext.Provider value={value}>
         <TranslationActionContext.Provider value={actions}>
            {children}
         </TranslationActionContext.Provider>
      </TranslationContext.Provider>
   )
};


TranslationProvider.propTypes = {
   children: PropTypes.node.isRequired,
};