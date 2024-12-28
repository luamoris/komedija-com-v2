import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../../pages/home/Home";
import Auth from "../../pages/auth/Auth";
import Poster from "../../pages/poster/Poster";
import Profile from "../../pages/profile/Profile";
import NotFound from "../../pages/404/NotFound";

import Private from "../../shared/hoc/Private";

import { CONFIG } from "../../shared/data/uilang/config.js";

export default function AppRouter({ LANG }) {
   const { path } = CONFIG;
   const titlePattern = CONFIG.name + ' | ';

   return (
      <>
         <Routes>
            <Route path={path.home} element={<Layout />}>

               {/* PUBLIC */}
               <Route index element={<Home LANG={LANG.HOME} titlePattern={titlePattern} />} />
               <Route path={path.login} element={<Auth LANG={LANG.LOGIN} titlePattern={titlePattern} />} />
               <Route path={path.posters} element={<Poster LANG={LANG.POSTERS} titlePattern={titlePattern} />} />

               {/* PRIVATE */}
               <Route
                  path={path.profile}
                  element={<Private path={LANG.LOGIN.path.short} ><Profile LANG={LANG.PROFILE} titlePattern={titlePattern} /></Private>}
               />

               {/* ERROR */}
               <Route path={path.e404} element={<NotFound LANG={LANG.NOTFOUND} titlePattern={titlePattern} />} />

            </Route>
         </Routes>
      </>
   );
};
