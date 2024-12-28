import React, {useContext} from "react";

import "./Auth.css";
import { useLocation, useNavigate } from "react-router-dom";
import {LanguageContext} from "../../shared/context/LanguageContext.jsx";
import Page from "../../effects/Page/Page.jsx";

export default function Auth() {
    const {CODE, SET_CODE, ROUTES, TL} = useContext(LanguageContext);
    const head = {
        title: TL.HOME.meta.title,
        description: TL.HOME.meta.description,
        keywords: TL.HOME.meta.keywords,
        path: ROUTES.HOME.path.long
    };

   const navigation = useNavigate();
   const location = useLocation();

   const fromPage = location.state?.from?.pathname || '/';

   return (
       <Page head={head}>
           <h1 style={{color: "#ffffff"}}>AUTH CONTENT - USER FROM {fromPage}</h1>
       </Page>
   );
}
