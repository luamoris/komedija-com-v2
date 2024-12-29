import {memo} from "react";

import './Sidebar.css';

import SocialList from "../SocialList/SocialList";
import NaviList from "../NaviList/NaviList";

import { socialMedia } from "../../shared/data/socialMedia.data";

const FOOTER_TEXT = '© Stand Up Community "KOMEDIJA"';


function Sidebar() {

   return (
      <aside className="sidebar">

         <div className="sidebar-header">

            <div className="sidebar-header__separator"></div>
            <NaviList />
            <div className="sidebar-header__separator"></div>
            <SocialList list={socialMedia} />

         </div>

         <div className="sidebar-footer">

            <span className="sidebar-footer__title">{FOOTER_TEXT}</span>

         </div>

      </aside>
   );
}


export default memo(Sidebar);