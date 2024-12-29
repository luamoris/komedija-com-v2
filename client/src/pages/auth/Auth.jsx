import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Auth.css";

import Page from "../../effects/Page/Page.jsx";
import { LanguageContext } from "../../shared/context/LanguageContext.jsx";

export default function Auth() {
   const { CODE, SET_CODE, ROUTES, TL } = useContext(LanguageContext);
   const head = {
      title: TL.HOME.meta.title,
      description: TL.HOME.meta.description,
      keywords: TL.HOME.meta.keywords,
      path: ROUTES.HOME.path.long
   };

   const location = useLocation();
   const navigation = useNavigate();

   const fromPage = location.state?.from?.pathname || '/';

   return (
      <Page head={head}>
         <h1 style={{ color: "#ffffff" }}>AUTH CONTENT - USER FROM {fromPage}</h1>
      </Page>
   );
}
