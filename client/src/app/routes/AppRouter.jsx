import { Suspense } from "react";
import { Routes, Route, Navigate, } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Posters from "../../pages/posters/Posters";
import NotFound from "../../pages/404/NotFound";
import Private from "../../shared/hoc/Private";
import Profile from "../../pages/profile/Profile";

import useTranslation from "../../shared/hooks/useTranslation.jsx";
import { APP_ROUTES } from "../../shared/data/app.routes.js";

import { APP_CONFIG as ac } from "../../shared/data/app.config.js";


export default function AppRouter() {
   const { CODE } = useTranslation();
   const paths = APP_ROUTES(CODE.code);

   return (
      <Suspense fallback={<div>Loading...</div>}>
         <Routes>

            <Route path="/" element={<Layout />}>

               <Route index element={<Navigate to={paths.home.short} replace />} />

               <Route path={ac.path.home} element={<Home />} />
               <Route path={ac.path.login} element={<Login />} />
               <Route path={ac.path.posters} element={<Posters />} />

               <Route path={ac.path.profile} element={<Private path={ac.path.login}><Profile /></Private>} />


               <Route path="*" element={<Navigate to={ac.path.notFound} replace />} />
               <Route path={ac.path.notFound} element={<NotFound />} />

            </Route>

         </Routes>
      </Suspense>
   );
}