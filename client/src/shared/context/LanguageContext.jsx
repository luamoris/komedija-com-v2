import React, {createContext, useEffect, useState} from 'react';

import {PAGE_PATH} from "../data/uilang/path.js";
import {LANG} from "../data/uilang/lang.js";

export const LanguageContext = createContext();

const supportedLanguages = ['ru', 'en', 'de'];

const getInitialLanguage = (_code) => {

    const isCode = (code) => code && supportedLanguages.includes(code);

    // Init
    debugger;
    if (isCode(_code)) return _code;

    // Browser Path
    const browserCode = window.location.pathname.split('/')[1];
    debugger;
    if (isCode(browserCode)) return browserCode;

    // Local Storage
    const savedCode = localStorage.getItem('language');
    debugger;
    if (isCode(savedCode)) return savedCode;

    // Localize Path
    const localCode = navigator.language.split("-")?.[0];
    debugger;
    if (isCode(localCode)) return localCode;

    return 'en';
}

const getPath = PAGE_PATH;

export const LanguageProvider = ({children}) => {
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
                SET_CODE: (code) => setCode(getInitialLanguage(code)),
                ROUTES: localizedPath,
                TL: LANG[code]
            }
        }>
            {children}
        </LanguageContext.Provider>
    )

}