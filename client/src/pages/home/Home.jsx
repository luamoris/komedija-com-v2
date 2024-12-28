import React, {useContext} from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";
import {LanguageContext} from "../../shared/context/LanguageContext.jsx";
import Page from "../../effects/Page/Page.jsx";

export default function Home() {
    const {CODE, SET_CODE, ROUTES, TL} = useContext(LanguageContext);
    const head = {
        title: TL.HOME.meta.title,
        description: TL.HOME.meta.description,
        keywords: TL.HOME.meta.keywords,
        path: ROUTES.HOME.path.long
    };

    return (
        <Page head={head}>
            <h1 style={{color: "#ffffff"}}>HOME CONTENT</h1>
            <div onClick={() => SET_CODE('ru')} style={{color: "#ffffff", margin: '10px', cursor: 'pointer'}}>RU</div>
            <div onClick={() => SET_CODE('en')} style={{color: "#ffffff", margin: '10px', cursor: 'pointer'}}>EN</div>
            <div onClick={() => SET_CODE('de')} style={{color: "#ffffff", margin: '10px', cursor: 'pointer'}}>DE</div>
        </Page>
   );
}
