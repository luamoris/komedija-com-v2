import {useCallback, useLayoutEffect, useState} from "react";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";

import AppProvider from "./provider/AppProvider.jsx";
import AppLocation from "./location/AppLocation";

import Header from "../widgets/Header/Header";
import Sidebar from "../widgets/Sidebar/Sidebar";
import AppRouter from "./routes/AppRouter";

import useMatchMedia from "../shared/hooks/useMatchMedia";
import useGlobalSettingsActions from "../shared/hooks/useGlobalSettingsActions.jsx";
import {TYPES} from "../shared/data/app.settings.js";
import SidebarMobile from "../widgets/SidebarMobile/SidebarMobile.jsx";
import Popup from "../shared/ui/Popup/Popup.jsx";
import useTranslation from "../shared/hooks/useTranslation.jsx";
import useTranslationActions from "../shared/hooks/useTranslationActions.jsx";
import SwitchLanguages from "../widgets/SwitchLanguages/SwitchLanguages.jsx";


function AppContent() {
   const match = useMatchMedia();
   const { GS_UPDATE } = useGlobalSettingsActions();

   useLayoutEffect(() => {
      Object.keys(match).forEach((key) => {
         if (match[key]) GS_UPDATE(TYPES.devices, key);
      });
   }, [match]);


   const { CODE: code, TRANSLATION: tr } = useTranslation();
   const { SET_UPDATE: setCode } = useTranslationActions();

   const [popup, setPopup] = useState(false);
   const togglePopup = useCallback(() => setPopup((prevState) => !prevState), []);

   return (
      <>
         {
            match.mobile && (
               <>
                  <Popup isOpen={popup}>
                     <div className="popup__content" style={{height: "200px"}}>
                        <SwitchLanguages codes={tr.getCodes()} currentCode={code.code} setCode={setCode} />
                     </div>
                  </Popup>
                  <SidebarMobile togglePopup={togglePopup} />
               </>
            )
         }
         {
            !match.mobile && (
               <>
                  <Header />
                  <Sidebar />
               </>
            )
         }
         <AppRouter />
      </>
   );
}


export default function App() {
   return (
      <HelmetProvider>
         <BrowserRouter>
            <AppProvider>
               <AppLocation>

                  <AppContent />

               </AppLocation>
            </AppProvider>
         </BrowserRouter>
      </HelmetProvider>
   );
};
