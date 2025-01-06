import { Suspense } from "react";
import { Routes, Route, Navigate, } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../../pages/home/Home";
import Auth from "../../pages/auth/Auth";
import Posters from "../../pages/posters/Posters";
import NotFound from "../../pages/404/NotFound";
import Private from "../../shared/hoc/Private";
import Profile from "../../pages/profile/Profile";

import useTranslation from "../../shared/hooks/useTranslation.jsx";

import { APP_ROUTES } from "../../shared/data_2/app.routes.js";


export default function AppRouter_2() {
   const { CODE } = useTranslation();
   const pathes = APP_ROUTES(CODE.code);

   return (
      <Suspense fallback={<div>Loading...</div>}>
         <Routes>

            <Route path="/" element={<Layout />}>

               <Route index element={<Navigate to={pathes.home.short} replace />} />

               <Route path={pathes.home.short} element={<Home />} />
               <Route path={pathes.login.short} element={<Auth />} />
               <Route path={pathes.posters.short} element={<Posters />} />

               <Route path={pathes.profile.short} element={<Private path={pathes.login.short}><Profile /></Private>} />


               <Route path={pathes.notFound.short} element={<NotFound />} />

            </Route>

         </Routes>
      </Suspense>
   );
}