import React from "react";
import { NavLink } from "react-router-dom";

import "./Logo.css";

import logoSVG from "/pictures/img/logo.svg";
import titleSVG from '/pictures/img/title.svg';

const ALT_LOGO = {
   logoPic: 'Stand Up Komedija logotype.',
   logoTitle: 'Stand Up Komedija title.',
}

function Logo({ classFather = '', classActive = 'active', path }) {

   const classesLink = (isActive) => `logo ${classFather} ${isActive ? classActive : ''}`;

   return (
      <>
         <NavLink to={path} className={classesLink}>
            <img className="logo-pic _unselect" src={logoSVG} alt={ALT_LOGO.logoPic} />
            <img className="logo-title _unselect" src={titleSVG} alt={ALT_LOGO.logoTitle} />
         </NavLink>
      </>
   );
}

export default Logo;