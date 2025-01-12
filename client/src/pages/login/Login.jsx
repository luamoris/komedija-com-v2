import { useLocation, useNavigate } from "react-router-dom";

import Page from "../../effects/Page/Page.jsx";
import useTranslation from "../../shared/hooks/useTranslation.jsx";
import { APP_ROUTES } from "../../shared/data/app.routes.js";

import "./Login.css";


export default function Login() {
   const { CODE: code, TRANSLATION: tr } = useTranslation();
   const trData = tr.getTranslationByCode(code.code);
   const path = APP_ROUTES(code.code);

   const head = {
      type: "login",
      title: trData.login.meta.title,
      description: trData.login.meta.description,
      keywords: trData.login.meta.keywords,
      path: path.login.long,
   };

   const location = useLocation();
   const navigation = useNavigate();

   const fromPage = location.state?.from?.pathname || '/';

   return (
      <Page head={head}>
         <h1 style={{ color: "#ffffff" }}>{fromPage}</h1>
         <div className="test-block" style={{ width: "100%", height: "200px", backgroundColor: "rgba(10, 50, 100, .5)", borderRadius: "4px", margin: "10px 0" }}></div>
      </Page>
   );
}
