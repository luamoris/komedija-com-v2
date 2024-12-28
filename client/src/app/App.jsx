import React, { useState, useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Header from "../widgets/Header/Header";
import Sidebar from "../widgets/Sidebar/Sidebar";
import AppRouter from "./routes/AppRouter";

import AppLocation from "./location/AppLocation";

export default function App({ LANG }) {
   // const [language, setLanguage] = useState({ code: 'ru', data: LANG.dispatch('ru') });

   // Слежение за изменениями в URL
   // const handleLanguageChange = (langCode) => {
   //    if (langCode === language?.code) return;
   //    setLanguage({ code: langCode, data: LANG.dispatch(langCode) });
   // };

   const [language, setLanguage] = useState(null);

   const handleLanguageChange = (langCode) => {
      if (langCode === language?.code) return;
      setLanguage({ code: langCode, data: LANG.dispatch(langCode) });
   };

   useEffect(() => {
      if (!language) {
         const langCode = window.location.pathname.split('/')[1];
         const supportedLanguages = ['ru', 'en', 'de'];
         if (supportedLanguages.includes(langCode)) {
            handleLanguageChange(langCode);
         } else {
            handleLanguageChange('ru');
         }
      }
   }, [language, LANG]);


   if (!language) {
      return <div>Loading...</div>;
   }

   return (
      <HelmetProvider>
         <BrowserRouter>
            <AppLocation onPathChange={handleLanguageChange}>

               <Header path={language?.data.HOME.path.short} />
               <Sidebar LANG={language?.data} />
               <AppRouter LANG={language?.data} />

            </AppLocation>
         </BrowserRouter>
      </HelmetProvider>
   );
};
