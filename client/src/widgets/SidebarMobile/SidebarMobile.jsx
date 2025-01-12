import { useState, useCallback, useEffect, memo, useRef } from "react";

import NaviListMobile from "../NaviListMobile/NaviListMobile.jsx";
import Burger from "../../shared/ui/Burger/Burger.jsx";
import PopupManager from "../PopupManager/PopupManager.jsx";

import useGlobalSettings from "../../shared/hooks/useGlobalSettings";
import { VIBRATE } from "../../shared/data/app.settings.js";
import { VIBRATE_DURATION } from "../../shared/data/const.js";

import "./SidebarMobile.css";


function SidebarMobile() {

   const { GS } = useGlobalSettings();

   const [isOpen, setIsOpen] = useState(false);
   const popupRef = useRef(null);
   const burgerRef = useRef(null);

   const togglePopup = useCallback(() => {
      if (navigator.vibrate && VIBRATE.on) navigator.vibrate(VIBRATE_DURATION);
      setIsOpen((prevState) => !prevState);
   }, []);

   useEffect(() => {

      const closePopup = (event) => {
         const popup = popupRef.current;
         const burger = burgerRef.current;
         if (popup && burger && !popup.contains(event.target) && !burger.contains(event.target)) {
            setIsOpen((prevState) => !prevState);
         }
      };

      if (isOpen) document.addEventListener('click', closePopup);
      else document.removeEventListener('click', closePopup);

      return () => document.removeEventListener('click', closePopup);
   }, [isOpen]);

   return (
      <>
         <PopupManager isOpen={isOpen} ref={popupRef} />

         <aside className="sidebar-mobile">
            <div className="sidebar-mobile__container">
               <NaviListMobile />
               <Burger classFather="sidebar-mobile__btn-menu" toggle={togglePopup} ref={burgerRef} />
            </div>
         </aside>

      </>
   );
}


export default memo(SidebarMobile);