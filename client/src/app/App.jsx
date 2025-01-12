import { useEffect, useLayoutEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";

import AppProvider from "./provider/AppProvider.jsx";
import AppLocation from "./location/AppLocation";

import Header from "../widgets/Header/Header";
import Sidebar from "../widgets/Sidebar/Sidebar";
import AppRouter from "./routes/AppRouter";

import useMatchMedia from "../shared/hooks/useMatchMedia";
import useGlobalSettingsActions from "../shared/hooks/useGlobalSettingsActions.jsx";
import { TYPES, SIDEBAR } from "../shared/data/app.settings.js";

import SidebarMobile from "../widgets/SidebarMobile/SidebarMobile.jsx";


function AppContent() {
   const match = useMatchMedia();
   const { GS_UPDATE } = useGlobalSettingsActions();

   useLayoutEffect(() => {
      Object.keys(match).forEach((key) => {
         if (match[key]) GS_UPDATE(TYPES.devices, key);
      });
   }, [match]);

   useEffect(() => {
      if (match.tablet) GS_UPDATE(TYPES.sidebar, SIDEBAR.short);
      else GS_UPDATE(TYPES.sidebar, SIDEBAR.long);
   }, [match.tablet]);

   return (
      <>
         {
            match.mobile && (
               <>
                  <SidebarMobile />
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
