import React from "react";

import SocialList from "../SocialList/SocialList";
import NaviList from "../NaviList/NaviList";
import './Sidebar.css';

import { socialMedia } from "../../shared/data/socialMedia.data";
import SwitchLang from "../../shared/ui/SwitchLang/SwitchLang";

function Sidebar() {
   const footerText = '© Stand Up Community "KOMEDIJA"';

   return (
      <>
         <aside className="sidebar">

            <div className="sidebar-header">

               <div className="sidebar-header__separator"></div>
               <NaviList />
               <div className="sidebar-header__separator"></div>
               <SocialList list={socialMedia} />
               <div className="sidebar-header__separator"></div>
               <SwitchLang />

            </div>

            <div className="sidebar-footer">
               <span className="sidebar-footer__title">{footerText}</span>
            </div>

         </aside>
      </>
   );
}

export default Sidebar;