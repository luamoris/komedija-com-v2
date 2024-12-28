import React, {useContext} from "react";

import BtnNaviLink from "../../shared/ui/BtnNaviLink/BtnNaviLink";
import "./NaviList.css";
import {LanguageContext} from "../../shared/context/LanguageContext.jsx";

function NaviList() {
   const {ROUTES, TL} = useContext(LanguageContext);
   const {HOME: H, LOGIN: L, POSTERS: P} = TL;

   return (
      <>
         <nav className="navigation">
            <ul className="navigation__list">

               <BtnNaviLink path={ROUTES.LOGIN.path.short} src={L.navIcon.src} alt={L.navIcon.alt} title={L.meta.title} />
               <BtnNaviLink path={ROUTES.HOME.path.short} src={H.navIcon.src} alt={H.navIcon.alt} title={H.meta.title} />
               <BtnNaviLink path={ROUTES.POSTERS.path.short} src={P.navIcon.src} alt={P.navIcon.alt} title={P.meta.title} />

            </ul>
         </nav>
      </>
   );
}

export default NaviList;