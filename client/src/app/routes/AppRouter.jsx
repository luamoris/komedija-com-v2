import {useContext} from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../../pages/home/Home";
import Auth from "../../pages/auth/Auth";
import Poster from "../../pages/posters/Posters.jsx";
import Profile from "../../pages/profile/Profile";
import NotFound from "../../pages/404/NotFound";

import Private from "../../shared/hoc/Private";

import {LanguageContext} from "../../shared/context/LanguageContext.jsx";

const _path = (page) => page.path.short;


export default function AppRouter() {
   const {ROUTES} = useContext(LanguageContext);

   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<Navigate to={_path(ROUTES.HOME)} />} />

            {/* PUBLIC */}
            <Route path={_path(ROUTES.HOME)} element={<Home />} />
            <Route path={_path(ROUTES.LOGIN)} element={<Auth />} />
            <Route path={_path(ROUTES.POSTERS)} element={<Poster />} />

            {/* PRIVATE */}
            <Route path={_path(ROUTES.PROFILE)} element={<Private path={_path(ROUTES.LOGIN)}><Profile /></Private>} />

            {/* ERROR */}
            <Route path={_path(ROUTES.NOTFOUND)} element={<NotFound />} />

         </Route>
      </Routes>
   );
};
