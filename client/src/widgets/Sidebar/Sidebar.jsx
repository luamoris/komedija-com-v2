import { memo, useCallback, useContext } from "react";

import SocialList from "../SocialList/SocialList";
import NaviList from "../NaviList/NaviList";
import Tools from "../Tools/Tools.jsx";

import useGlobalSettings from "../../shared/hooks/useGlobalSettings.jsx";
import useGlobalSettingsActions from "../../shared/hooks/useGlobalSettingsActions.jsx"

import { MEDIA } from "../../shared/data/strict/media.strict.js";
import { TYPES, SIDEBAR, SCHEMES } from "../../shared/data/app.settings.js";

import { sFOOTER } from "../../shared/data/strict/footer.strict.js";

import './Sidebar.css';


function Sidebar() {
   const { GS } = useGlobalSettings();
   const { GS_UPDATE } = useGlobalSettingsActions();

   const toggleShort = useCallback(() => {
      const newValue = GS[TYPES.sidebar] === SIDEBAR.short ? SIDEBAR.long : SIDEBAR.short;
      GS_UPDATE(TYPES.sidebar, newValue);
   }, [GS, GS_UPDATE]);

   const toggleScheme = useCallback(() => {
      const newScheme = GS[TYPES.scheme] === SCHEMES.winter ? SCHEMES.dark : SCHEMES.winter;
      GS_UPDATE(TYPES.scheme, newScheme);
   }, [GS, GS_UPDATE]);

   const _getSchemeMode = () => GS[TYPES.scheme] === SCHEMES.winter ? 'start' : 'end';

   return (
      <aside className="sidebar">

         <div className="sidebar-header">

            <Tools toggleMenu={toggleShort} toggleScheme={toggleScheme} currentScheme={_getSchemeMode()} />
            <div className="sidebar-header__separator"></div>
            <NaviList />
            <div className="sidebar-header__separator"></div>
            <SocialList list={MEDIA} />

         </div>

         <div className="sidebar-footer">

            <span className="sidebar-footer__title">{sFOOTER.content}</span>

         </div>

      </aside>
   );
}


export default memo(Sidebar);