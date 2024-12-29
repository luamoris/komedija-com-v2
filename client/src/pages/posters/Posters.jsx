import { useContext } from "react";

import "./Posters.css";

import { LanguageContext } from "../../shared/context/LanguageContext.jsx";

import Page from "../../effects/Page/Page.jsx";


export default function Posters() {
   const { ROUTES, TL } = useContext(LanguageContext);
   const head = {
      type: "posters",
      title: TL.POSTERS.meta.title,
      description: TL.POSTERS.meta.description,
      keywords: TL.POSTERS.meta.keywords,
      path: ROUTES.POSTERS.path.long
   };

   return (
      <Page head={head}>
         <h1 style={{ color: "#ffffff" }}>POSTERS CONTENT</h1>
      </Page>
   );
}