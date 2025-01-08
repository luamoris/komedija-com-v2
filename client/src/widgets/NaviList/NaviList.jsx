import { memo } from "react";

import useTranslation from "../../shared/hooks/useTranslation.jsx";

import BtnNaviLink from "../../shared/ui/BtnNaviLink/BtnNaviLink";

import {APP_ROUTES} from "../../shared/data/app.routes.js";

import "./NaviList.css";


function NaviList() {
   const { CODE: code, TRANSLATION: tr } = useTranslation();
   const trData = tr.getTranslationByCode(code.code);
   const path = APP_ROUTES(code.code);

   return (
      <nav className="navigation">
         <ul className="navigation__list">

            <BtnNaviLink path={path.login.short} src={trData.login.navIcon.src} alt={trData.login.navIcon.alt} title={trData.login.meta.title} />
            <BtnNaviLink path={path.home.short} src={trData.home.navIcon.src} alt={trData.home.navIcon.alt} title={trData.home.meta.title} />
            <BtnNaviLink path={path.posters.short} src={trData.posters.navIcon.src} alt={trData.posters.navIcon.alt} title={trData.posters.meta.title} />

         </ul>
      </nav>
   );
}


export default memo(NaviList);