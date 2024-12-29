import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./BtnNaviLink.css";

import Icon from "../Icon/Icon";

export default function BtnNaviLink({ path, src, title, alt = '' }) {

   const classesLink = ({ isActive }) => {
      return `navigation-item navi-link _unselect ${isActive ? 'navigation-item_active' : ''}`
   };

   return (
      <>
         <NavLink to={path} className={classesLink} end>
            <Icon classFather='navi-link__box' src={src} alt={alt} />
            <span className="navi-link__title">{title}</span>
         </NavLink>
      </>
   );
}