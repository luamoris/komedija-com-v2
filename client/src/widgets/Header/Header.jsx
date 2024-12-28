import React from "react";

import Logo from "../../shared/ui/Logo/Logo";
import './Header.css';

function Header({ path }) {

   return (
      <>
         <header className="header">
            <Logo classFather="header__logo" classActive="active" path={path} />
         </header>
      </>
   );
}

export default Header;