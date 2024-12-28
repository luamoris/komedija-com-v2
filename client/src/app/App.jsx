import React from "react";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Header from "../widgets/Header/Header";
import Sidebar from "../widgets/Sidebar/Sidebar";
import AppRouter from "./routes/AppRouter";
import { LanguageProvider} from "../shared/context/LanguageContext";

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
               <AppContent />
            </LanguageProvider>
         </BrowserRouter>
      </HelmetProvider>
   );
};
