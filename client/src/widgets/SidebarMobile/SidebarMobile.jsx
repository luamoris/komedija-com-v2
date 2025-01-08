import NaviListMobile from "../NaviListMobile/NaviListMobile.jsx";
import Burger from "../../shared/ui/Burger/Burger.jsx";
import "./SidebarMobile.css";
import {useCallback, memo} from "react";
import PropTypes from "prop-types";

function SidebarMobile({ togglePopup }) {

   const toggle = useCallback(() => {
      if (navigator.vibrate) navigator.vibrate(100);
      togglePopup();
   }, []);

   return (
      <aside className="sidebar-mobile">
         <div className="sidebar-mobile__container">
            <NaviListMobile/>
            <Burger classFather="sidebar-mobile__btn-menu" toggle={toggle} />
         </div>
      </aside>
   );
}

SidebarMobile.propTypes = {
   togglePopup: PropTypes.func.isRequired,
}

export default memo(SidebarMobile);