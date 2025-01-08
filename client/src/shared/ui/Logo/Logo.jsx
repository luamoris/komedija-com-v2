import {memo} from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Logo.css";
import {sLOGO} from "../../data/strict/logo.strict.js";


const _logoClasses = (isActive, classFather) => classNames('logo', classFather, { 'logo_active': isActive })


function Logo({ classFather = '', path }) {

   return (
      <NavLink to={path} className={({isActive}) => _logoClasses(isActive, classFather)}>
         <img className="logo-pic _unselect" src={sLOGO.img.src} alt={sLOGO.img.alt} />
         <img className="logo-title _unselect" src={sLOGO.title.src} alt={sLOGO.title.alt} />
      </NavLink>
   );
}


Logo.propTypes = {
   path: PropTypes.string.isRequired,
   classFather: PropTypes.string,
}

export default memo(Logo);