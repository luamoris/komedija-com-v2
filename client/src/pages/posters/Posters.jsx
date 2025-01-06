import { memo, useContext } from "react";

import "./Posters.css";

// import { LanguageContext } from "../../shared/context/LanguageContext.jsx";

import Page from "../../effects/Page/Page.jsx";


function Posters() {
   // const { ROUTES, TL } = useContext(LanguageContext);
   // const head = {
   //    type: "posters",
   //    title: TL.POSTERS.meta.title,
   //    description: TL.POSTERS.meta.description,
   //    keywords: TL.POSTERS.meta.keywords,
   //    path: ROUTES.POSTERS.path.long
   // };

   // return (
   //    <Page head={head}>
   //       <h1 style={{ color: "#ffffff" }}>PS</h1>
   //    </Page>
   // );

   return <h1 style={{ color: "#ffffff" }}>PS</h1>;
}


export default Posters;