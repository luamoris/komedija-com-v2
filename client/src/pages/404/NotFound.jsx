import { useContext } from "react";

import "./NotFound.css";

// import { LanguageContext } from "../../shared/context/LanguageContext.jsx";

import Page from "../../effects/Page/Page.jsx";


export default function NotFound() {
   // const { ROUTES, TL } = useContext(LanguageContext);
   // const head = {
   //    type: "e404",
   //    title: TL.NOTFOUND.meta.title,
   //    description: TL.NOTFOUND.meta.description,
   //    keywords: TL.NOTFOUND.meta.keywords,
   //    path: ROUTES.NOTFOUND.path.long
   // };

   // return (
   //    <Page head={head}>
   //       <h1 style={{ color: "#ffffff" }}>404</h1>
   //    </Page>
   // )

   return <h1 style={{ color: "#ffffff" }}>404</h1>;
}