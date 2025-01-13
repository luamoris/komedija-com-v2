import Page from "../../effects/Page/Page.jsx";
import useTranslation from "../../shared/hooks/useTranslation.jsx";
import { APP_ROUTES } from "../../shared/data/app.routes.js";

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
         {/* <h1 style={{ color: "#ffffff" }}>PS</h1> */}
         {/* <div className="test-block" style={{ width: "100%", height: "200px", backgroundColor: "rgba(10, 50, 100, .5)", borderRadius: "4px", margin: "10px 0" }}></div> */}

         <div className="posters">
            <div className="posters-banner"></div>
            <div className="posters-title"></div>
            <div className="posters-list"></div>
            <div className="posters-sidebar"></div>
         </div>



      </Page>
   );
}


export default Posters;