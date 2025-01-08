import Page from "../../effects/Page/Page.jsx";
import useTranslation from "../../shared/hooks/useTranslation.jsx";
import {APP_ROUTES} from "../../shared/data/app.routes.js";

import "./NotFound.css";


export default function NotFound() {
   const { CODE: code, TRANSLATION: tr } = useTranslation();
   const trData = tr.getTranslationByCode(code.code);
   const path = APP_ROUTES(code.code);

   const head = {
      type: "notFound",
      title: trData.notFound.meta.title,
      description: trData.notFound.meta.description,
      keywords: trData.notFound.meta.keywords,
      path: path.notFound.long,
   };

   return (
      <Page head={head}>
         <h1 style={{ color: "#ffffff" }}>404</h1>
      </Page>
   )
}