import React from "react";
import { Helmet } from "react-helmet-async";

export default function HeadMeta({ path, meta, titlePattern }) {
   return (
      <Helmet>
         {/* ЗАГОЛОВОК */}
         <title>{titlePattern + meta.title}</title>
         {/* ССЫЛКА НА СТРАНИЦУ */}
         <link rel="canonical" href={path.long} />
         {/* ОПИСАНИЕ СТРАНИЦЫ */}
         <meta name="title" content={meta.title} />
         <meta name="description" content={meta.description} />
         <meta name="keywords" content={meta.keywords} />
      </Helmet>
   );
}