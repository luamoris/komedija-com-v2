import React from "react";

import BtnNaviLink from "../../shared/ui/BtnNaviLink/BtnNaviLink";
import "./NaviList.css";

function NaviList({ LANG }) {
   const { HOME: H, LOGIN: L, POSTERS: P } = LANG;

   return (
      <>
         <nav className="navigation">
            <ul className="navigation__list">

               <BtnNaviLink path={L.path.short} src={L.navIcon.src} alt={L.navIcon.alt} title={L.meta.title} />
               <BtnNaviLink path={H.path.short} src={H.navIcon.src} alt={H.navIcon.alt} title={H.meta.title} />
               <BtnNaviLink path={P.path.short} src={P.navIcon.src} alt={P.navIcon.alt} title={P.meta.title} />

            </ul>
         </nav>
      </>
   );
}

export default NaviList;