import { memo, useContext } from "react";

import "./Home.css";

// import { LanguageContext } from "../../shared/context/LanguageContext.jsx";

import Page from "../../effects/Page/Page.jsx";


function Home() {
   // const { ROUTES, TL } = useContext(LanguageContext);
   // const head = {
   //    type: "home",
   //    title: TL.HOME.meta.title,
   //    description: TL.HOME.meta.description,
   //    keywords: TL.HOME.meta.keywords,
   //    path: ROUTES.HOME.path.long
   // };

   // return (
   //    <Page head={head}>
   //       <h1 style={{ color: "#ffffff" }}>1H</h1>
   //    </Page>
   // );

   return <h1 style={{ color: "#ffffff" }}>1H</h1>;
}

export default Home;
