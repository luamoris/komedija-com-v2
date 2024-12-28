import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
   return (
      <>
         <div className="app">
            <div className="app-container">

               <main className="main">

                  {/* CONTENT (ROUTERS) */}
                  <Outlet />

               </main>

            </div>
         </div>
      </>
   );
};
