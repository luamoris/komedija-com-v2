import Page from "../../effects/Page/Page.jsx";
import useTranslation from "../../shared/hooks/useTranslation.jsx";
import {APP_ROUTES} from "../../shared/data/app.routes.js";

import "./Profile.css";


export default function Profile() {
   const { CODE: code, TRANSLATION: tr } = useTranslation();
   const trData = tr.getTranslationByCode(code.code);
   const path = APP_ROUTES(code.code);

   const head = {
      type: "profile",
      title: trData.profile.meta.title,
      description: trData.profile.meta.description,
      keywords: trData.profile.meta.keywords,
      path: path.profile.long,
   };

   return (
      <Page head={head}>
         <h1 style={{ color: "#ffffff" }}>P</h1>
      </Page>
   );
}