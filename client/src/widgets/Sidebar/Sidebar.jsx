import { memo, useCallback, useContext } from "react";

import SocialList from "../SocialList/SocialList";
import NaviList from "../NaviList/NaviList";
import Tools from "../Tools/Tools.jsx";
import Switcher from "../../shared/ui/Settings/Switcher/Switcher.jsx";

import useGlobalSettings from "../../shared/hooks/useGlobalSettings.jsx";
import useGlobalSettingsActions from "../../shared/hooks/useGlobalSettingsActions.jsx"

import { MEDIA } from "../../shared/data/strict/media.strict.js";
import { TYPES, SIDEBAR, SCHEMES } from "../../shared/data/app.settings.js";

import { sFOOTER } from "../../shared/data/strict/footer.strict.js";

import './Sidebar.css';


const _schemeMode = (scheme) => scheme === SCHEMES.winter ? 'start' : 'end';


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

   return (
      <aside className="sidebar">

         <div className="sidebar-header">

            <Tools toggleMenu={toggleShort}>
               {
                  GS[TYPES.sidebar] === SIDEBAR.long && <Switcher toggle={toggleScheme} currentMode={_schemeMode(GS[TYPES.scheme])} classFather="__long" />
               }
            </Tools>

            <div className="sidebar-header__separator"></div>

            <NaviList />

            <div className="sidebar-header__separator"></div>

            <SocialList list={MEDIA} />

            {
               GS[TYPES.sidebar] === SIDEBAR.short && (
                  <>
                     <div className="sidebar-header__separator"></div>
                     <Switcher toggle={toggleScheme} currentMode={_schemeMode(GS[TYPES.scheme])} classFather="__short" />
                  </>
               )
            }

         </div>

         <div className="sidebar-footer">
            <span className="sidebar-footer__title">{sFOOTER.content}</span>
         </div>

      </aside>
   );
}


export default memo(Sidebar);