import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";

import AppProvider from "./provider/AppProvider.jsx";
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
            <AppProvider>
               <AppLocation>

                  <AppContent />

               </AppLocation>
            </AppProvider>
         </BrowserRouter>
      </HelmetProvider>
   );
};
