import {memo} from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Logo.css";

import logoSVG from "/pictures/img/logo.svg";
import titleSVG from '/pictures/img/title.svg';


const ALT_LOGO = {
   logoPic: 'Stand Up Komedija logotype.',
   logoTitle: 'Stand Up Komedija title.',
}

const _logoClasses = (isActive, classFather) => classNames('logo', classFather, { 'logo_active': isActive })


function Logo({ classFather = '', path }) {

   return (
      <NavLink to={path} className={({isActive}) => _logoClasses(isActive, classFather)}>
         <img className="logo-pic _unselect" src={logoSVG} alt={ALT_LOGO.logoPic} />
         <img className="logo-title _unselect" src={titleSVG} alt={ALT_LOGO.logoTitle} />
      </NavLink>
   );
}


Logo.propTypes = {
   path: PropTypes.string.isRequired,
   classFather: PropTypes.string,
}

export default memo(Logo);