import { memo, useContext } from "react";

import "./NaviList.css";

// import {LanguageContext} from "../../shared/context/LanguageContext.jsx";

import BtnNaviLink from "../../shared/ui/BtnNaviLink/BtnNaviLink";


function NaviList() {
   // const {ROUTES, TL} = useContext(LanguageContext);
   // const {HOME: H, LOGIN: L, POSTERS: P} = TL;

   return (
      <nav className="navigation">
         <ul className="navigation__list">

            {/* <BtnNaviLink path={ROUTES.LOGIN.path.short} src={L.navIcon.src} alt={L.navIcon.alt} title={L.meta.title} />
            <BtnNaviLink path={ROUTES.HOME.path.short} src={H.navIcon.src} alt={H.navIcon.alt} title={H.meta.title} />
            <BtnNaviLink path={ROUTES.POSTERS.path.short} src={P.navIcon.src} alt={P.navIcon.alt} title={P.meta.title} /> */}

            <BtnNaviLink path="/ru/login" src="" alt="" title="" />
            <BtnNaviLink path="/ru" src="" alt="" title="" />
            <BtnNaviLink path="/ru/posters" src="" alt="" title="" />

         </ul>
      </nav>
   );
}


export default memo(NaviList);