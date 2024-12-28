import React from 'react';
import {Helmet} from "react-helmet-async";

import {CONFIG} from "../../shared/data/uilang/config.js";

const _title = (title) => CONFIG.name + ' | ' + title;

/**
 * title
 * path (global)
 * description
 * keywords
 * */

export default function Page({head, children}) {
    return (
        <>
            <Helmet>
                {/* ЗАГОЛОВОК */}
                <title>{_title(head.title)}</title>
                {/* ССЫЛКА НА СТРАНИЦУ */}
                <link rel="canonical" href={head.path}/>
                {/* ОПИСАНИЕ СТРАНИЦЫ */}
                <meta name="title" content={_title(head.title)}/>
                <meta name="description" content={head.description}/>
                <meta name="keywords" content={head.keywords}/>
            </Helmet>
            {children}
        </>
    );
}