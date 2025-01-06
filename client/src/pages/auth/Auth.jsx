import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Auth.css";

// import { LanguageContext } from "../../shared/context/LanguageContext.jsx";

import Page from "../../effects/Page/Page.jsx";


export default function Auth() {
   // const { ROUTES, TL } = useContext(LanguageContext);
   // const head = {
   //    type: "login",
   //    title: TL.LOGIN.meta.title,
   //    description: TL.LOGIN.meta.description,
   //    keywords: TL.LOGIN.meta.keywords,
   //    path: ROUTES.LOGIN.path.long
   // };

   const location = useLocation();
   const navigation = useNavigate();

   const fromPage = location.state?.from?.pathname || '/';

   // return (
   //    <Page head={head}>
   //       <h1 style={{ color: "#ffffff" }}>{fromPage}</h1>
   //    </Page>
   // );

   return <h1 style={{ color: "#ffffff" }}>{fromPage}</h1>;
}
