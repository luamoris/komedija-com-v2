import { memo } from "react";

import "./NaviList.css";

import useTranslation from "../../shared/hooks/useTranslation.jsx";

import BtnNaviLink from "../../shared/ui/BtnNaviLink/BtnNaviLink";

import {APP_ROUTES} from "../../shared/data_2/app.routes.js";


function NaviList() {
   const { CODE } = useTranslation();
   const paths = APP_ROUTES(CODE.code);

   return (
      <nav className="navigation">
         <ul className="navigation__list">

            {/* <BtnNaviLink path={ROUTES.LOGIN.path.short} src={L.navIcon.src} alt={L.navIcon.alt} title={L.meta.title} />
            <BtnNaviLink path={ROUTES.HOME.path.short} src={H.navIcon.src} alt={H.navIcon.alt} title={H.meta.title} />
            <BtnNaviLink path={ROUTES.POSTERS.path.short} src={P.navIcon.src} alt={P.navIcon.alt} title={P.meta.title} /> */}

            <BtnNaviLink path={paths.login.short} src="" alt="" title="" />
            <BtnNaviLink path={paths.home.short} src="" alt="" title="" />
            <BtnNaviLink path={paths.posters.short} src="" alt="" title="" />

         </ul>
      </nav>
   );
}


export default memo(NaviList);