import { memo } from "react";

import useTranslation from "../../shared/hooks/useTranslation.jsx";

import BtnNaviLinkMobile from "../../shared/ui/BtnNaviLinkMobile/BtnNaviLinkMobile.jsx";

import {APP_ROUTES} from "../../shared/data/app.routes.js";

import "./NaviListMobile.css";


function NaviListMobile() {
   const { CODE: code, TRANSLATION: tr } = useTranslation();
   const trData = tr.getTranslationByCode(code.code);
   const path = APP_ROUTES(code.code);

   return (
      <nav className="m-navigation">
         <ul className="m-navigation__list">

            <BtnNaviLinkMobile path={path.home.short} src={trData.home.navIcon.src} alt={trData.home.navIcon.alt} title={trData.home.meta.title} />
            <BtnNaviLinkMobile path={path.posters.short} src={trData.posters.navIcon.src} alt={trData.posters.navIcon.alt} title={trData.posters.meta.title} />
            <BtnNaviLinkMobile path={path.login.short} src={trData.login.navIcon.src} alt={trData.login.navIcon.alt} title={trData.login.meta.title} />

         </ul>
      </nav>
   );
}


export default memo(NaviListMobile);