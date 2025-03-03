import { memo } from "react";

import SwitchLanguages from "../SwitchLanguages/SwitchLanguages.jsx";

import useTranslation from "../../shared/hooks/useTranslation.jsx";
import useTranslationActions from "../../shared/hooks/useTranslationActions.jsx";

import Logo from "../../shared/ui/Logo/Logo";

import './Header.css';



function Header() {
   const { CODE: code, TRANSLATION: tr } = useTranslation();
   const { SET_UPDATE: setCode } = useTranslationActions();

   return (
      <header className="header">
         <div className="header__top">
            <Logo classFather="header__logo" path='/' />
         </div>
         <div className="header_bottom">
            <SwitchLanguages codes={tr.getCodes()} currentCode={code.code} setCode={setCode} />
         </div>
      </header>
   );
}

export default memo(Header);