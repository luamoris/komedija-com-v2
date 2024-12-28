import React, {useContext} from "react";

import "./Poster.css";
import {LanguageContext} from "../../shared/context/LanguageContext.jsx";
import Page from "../../effects/Page/Page.jsx";

export default function Poster() {
    const {CODE, SET_CODE, ROUTES, TL} = useContext(LanguageContext);
    const head = {
        title: TL.HOME.meta.title,
        description: TL.HOME.meta.description,
        keywords: TL.HOME.meta.keywords,
        path: ROUTES.HOME.path.long
    };

    return (
        <Page head={head}>
            <h1 style={{color: "#ffffff"}}>POSTER CONTENT</h1>
        </Page>
    );
}