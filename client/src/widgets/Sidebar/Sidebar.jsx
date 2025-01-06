import { memo, useCallback, useContext } from "react";

import './Sidebar.css';

import SocialList from "../SocialList/SocialList";
import NaviList from "../NaviList/NaviList";
import Tools from "../../shared/ui/Tools/Tools.jsx";

import { GlobalSettingsContext } from "../../shared/context/GlobalSettingsContext.jsx";
import { GlobalSettingsActionsContext } from "../../shared/context/GlobalSettingsContext.jsx";

import { MEDIA } from "../../shared/data_2/strict/media.strict.js";
import { TYPES, SIDEBAR } from "../../shared/data_2/app.settings.js";


const FOOTER_TEXT = '© Stand Up Community "KOMEDIJA"';


function Sidebar() {
   const { GS } = useContext(GlobalSettingsContext);
   const { GS_UPDATE } = useContext(GlobalSettingsActionsContext);

   const toggleShort = useCallback(() => {
      const newValue = GS[TYPES.sidebar] === SIDEBAR.short ? SIDEBAR.long : SIDEBAR.short;
      GS_UPDATE(TYPES.sidebar, newValue);
   }, [GS, GS_UPDATE]);

   return (
      <aside className="sidebar">

         <div className="sidebar-header">

            <Tools toggle={toggleShort} />
            <div className="sidebar-header__separator"></div>
            <NaviList />
            <div className="sidebar-header__separator"></div>
            <SocialList list={MEDIA} />

         </div>

         <div className="sidebar-footer">

            <span className="sidebar-footer__title">{FOOTER_TEXT}</span>

         </div>

      </aside>
   );
}


export default memo(Sidebar);