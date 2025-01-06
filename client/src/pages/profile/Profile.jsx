import { useContext } from "react";

import "./Profile.css";

// import { LanguageContext } from "../../shared/context/LanguageContext.jsx";

import Page from "../../effects/Page/Page.jsx";


export default function Profile() {
   // const { ROUTES, TL } = useContext(LanguageContext);
   // const head = {
   //    type: "profile",
   //    title: TL.PROFILE.meta.title,
   //    description: TL.PROFILE.meta.description,
   //    keywords: TL.PROFILE.meta.keywords,
   //    path: ROUTES.PROFILE.path.long
   // };

   // return (
   //    <Page head={head}>
   //       <h1 style={{ color: "#ffffff" }}>P</h1>
   //    </Page>
   // );

   return <h1 style={{ color: "#ffffff" }}>P</h1>;
}