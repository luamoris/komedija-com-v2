import Page from "../../effects/Page/Page.jsx";
import useTranslation from "../../shared/hooks/useTranslation.jsx";
import {APP_ROUTES} from "../../shared/data/app.routes.js";

import "./Posters.css";


function Posters() {
   const { CODE: code, TRANSLATION: tr } = useTranslation();
   const trData = tr.getTranslationByCode(code.code);
   const path = APP_ROUTES(code.code);

   const head = {
      type: "posters",
      title: trData.posters.meta.title,
      description: trData.posters.meta.description,
      keywords: trData.posters.meta.keywords,
      path: path.posters.long,
   };

   return (
      <Page head={head}>
         <h1 style={{ color: "#ffffff" }}>PS</h1>
      </Page>
   );
}


export default Posters;