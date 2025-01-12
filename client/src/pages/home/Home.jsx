import { NavLink } from "react-router-dom";

import Page from "../../effects/Page/Page.jsx";
import useTranslation from "../../shared/hooks/useTranslation.jsx";

import { APP_ROUTES } from "../../shared/data/app.routes.js";

import "./Home.css";


function Home() {
   const { CODE: code, TRANSLATION: tr } = useTranslation();
   const trData = tr.getTranslationByCode(code.code);
   const path = APP_ROUTES(code.code);

   const head = {
      type: "home",
      title: trData.home.meta.title,
      description: trData.home.meta.description,
      keywords: trData.home.meta.keywords,
      path: path.home.long,
   };

   return (
      <Page head={head}>
         <h1 style={{ color: "#ffffff" }}>1-HOME</h1>
         <NavLink to="/ent" style={{ color: "#ffffff" }}>GO TO ERROR</NavLink>
         <div className="test-block" style={{ width: "100%", height: "200px", backgroundColor: "rgba(10, 50, 100, .5)", borderRadius: "4px", margin: "10px 0" }}></div>
         <div className="test-block" style={{ width: "100%", height: "200px", backgroundColor: "rgba(10, 50, 100, .5)", borderRadius: "4px", margin: "10px 0" }}></div>
         <div className="test-block" style={{ width: "100%", height: "200px", backgroundColor: "rgba(10, 50, 100, .5)", borderRadius: "4px", margin: "10px 0" }}></div>
         <div className="test-block" style={{ width: "100%", height: "200px", backgroundColor: "rgba(10, 50, 100, .5)", borderRadius: "4px", margin: "10px 0" }}></div>
      </Page>
   );
}

export default Home;
