import React, { useContext } from "react";

import "./SwitchLang.css";

import { useLocation, useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

export default function SwitchLang() {
   const { CODE, SET_CODE, ROUTES, TL } = useContext(LanguageContext);

   const location = useLocation();
   const navigate = useNavigate();

   const switchLang = (_code) => {
      SET_CODE(_code);
      const newPath = location.pathname.replace(CODE, _code);
      navigate(newPath);
   };

   const isActive = (_code) => CODE === _code ? 'active' : '';
   const langItemClasses = (_code) => `lang__item _unselect ${isActive(_code)}`;

   return (
      <>
         <div className="lang">
            <div onClick={() => switchLang('ru')} className={langItemClasses('ru')}>RU</div>
            <div onClick={() => switchLang('en')} className={langItemClasses('en')}>EN</div>
            <div onClick={() => switchLang('de')} className={langItemClasses('de')}>DE</div>
         </div>
      </>
   )
}