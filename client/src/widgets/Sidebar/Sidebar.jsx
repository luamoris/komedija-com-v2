import {memo, useCallback, useContext} from "react";

import './Sidebar.css';

import SocialList from "../SocialList/SocialList";
import NaviList from "../NaviList/NaviList";
import Tools from "../../shared/ui/Tools/Tools.jsx";

import {GlobalSettingsContext} from "../../shared/context/GlobalSettingsContext.jsx";

import { socialMedia } from "../../shared/data/socialMedia.data";
import {TYPES, SIDEBAR} from "../../shared/data/globalSettings.data.js";

const FOOTER_TEXT = '© Stand Up Community "KOMEDIJA"';


function Sidebar() {
   const {GL, SET_GL} = useContext(GlobalSettingsContext);

   const handleShort = useCallback(() => {
      const newValue = GL[TYPES.sidebar] === SIDEBAR.short ? SIDEBAR.long : SIDEBAR.short;
      SET_GL(TYPES.sidebar, newValue);
   }, [GL, SET_GL]);

   return (
      <aside className="sidebar">

         <div className="sidebar-header">

            <Tools toggle={handleShort} />
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