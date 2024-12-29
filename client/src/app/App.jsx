import React from "react";

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";

import { LanguageProvider } from "../shared/context/LanguageContext";
import AppLocation from "./location/AppLocation";

import Header from "../widgets/Header/Header";
import Sidebar from "../widgets/Sidebar/Sidebar";
import AppRouter from "./routes/AppRouter";

function AppContent() {

   return (
      <>
         <Header />
         <Sidebar />
         <AppRouter />
      </>
   );
}

export default function App() {
   return (
      <HelmetProvider>
         <BrowserRouter>
            <LanguageProvider>
               <AppLocation>

                  <AppContent />

               </AppLocation>
            </LanguageProvider>
         </BrowserRouter>
      </HelmetProvider>
   );
};
