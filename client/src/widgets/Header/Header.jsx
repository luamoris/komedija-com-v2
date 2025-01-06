import { useContext, memo } from "react";

import './Header.css';

// import { LanguageContext } from "../../shared/context/LanguageContext";

import SwitchLanguages from "../SwitchLanguages/SwitchLanguages.jsx";

import Logo from "../../shared/ui/Logo/Logo";

import { CONFIG } from "../../shared/data/uilang/config.js";


function Header() {
   // const { CODE, SET_CODE, ROUTES } = useContext(LanguageContext);

   return (
      <header className="header">
         <div className="header__top">
            {/* <Logo classFather="header__logo" path={ROUTES.HOME.path.short} /> */}
            <Logo classFather="header__logo" path='/' />
         </div>
         <div className="header_bottom">
            {/* <SwitchLanguages codes={CONFIG.lang.supported} currentCode={CODE} setCode={SET_CODE} /> */}
            <SwitchLanguages codes={['ru', 'en', 'de']} currentCode="ru" setCode={() => ''} />
         </div>
      </header>
   );
}

export default memo(Header);