import React, { useContext } from "react";

import "./NotFound.css";

import Page from "../../effects/Page/Page.jsx";
import { LanguageContext } from "../../shared/context/LanguageContext.jsx";

export default function NotFound() {
   const { CODE, SET_CODE, ROUTES, TL } = useContext(LanguageContext);
   const head = {
      title: TL.HOME.meta.title,
      description: TL.HOME.meta.description,
      keywords: TL.HOME.meta.keywords,
      path: ROUTES.HOME.path.long
   };

   return (
      <Page head={head}>
         <h1 style={{ color: "#ffffff" }}>404</h1>
      </Page>
   )
}