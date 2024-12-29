import React, { useContext } from "react";
import { LanguageContext } from "../../shared/context/LanguageContext";

import Logo from "../../shared/ui/Logo/Logo";
import './Header.css';

function Header() {
   const { ROUTES } = useContext(LanguageContext);

   return (
      <>
         <header className="header">
            <Logo classFather="header__logo" classActive="active" path={ROUTES.HOME.path.short} />
         </header>
      </>
   );
}

export default Header;