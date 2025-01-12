import { memo, forwardRef, useCallback } from "react";
import PropTypes from 'prop-types';

import Popup from "../../shared/ui/Popup/Popup";
import SwitchLanguages from "../SwitchLanguages/SwitchLanguages";
import Switcher from "../../shared/ui/Settings/Switcher/Switcher";

import useTranslation from "../../shared/hooks/useTranslation";
import useTranslationActions from "../../shared/hooks/useTranslationActions";

import useGlobalSettings from "../../shared/hooks/useGlobalSettings";
import useGlobalSettingsActions from "../../shared/hooks/useGlobalSettingsActions";

import { TYPES, SCHEMES } from "../../shared/data/app.settings";

import "./PopupManager.css";


const PopupManager = forwardRef(({ isOpen = false }, ref) => {

   const { CODE: code, TRANSLATION: tr } = useTranslation();
   const { SET_UPDATE: setCode } = useTranslationActions();

   const { GS } = useGlobalSettings();
   const { GS_UPDATE } = useGlobalSettingsActions();

   const toggleScheme = useCallback(() => {
      const newScheme = GS[TYPES.scheme] === SCHEMES.winter ? SCHEMES.dark : SCHEMES.winter;
      GS_UPDATE(TYPES.scheme, newScheme);
   }, [GS, GS_UPDATE]);

   const _getSchemeMode = () => GS[TYPES.scheme] === SCHEMES.winter ? 'start' : 'end';

   return (
      <Popup isOpen={isOpen} ref={ref}>
         <div className="popup-manager">

            <SwitchLanguages codes={tr.getCodes()} currentCode={code.code} setCode={setCode} />
            <Switcher toggle={toggleScheme} currentMode={_getSchemeMode()} />

         </div>
      </Popup>
   );
});

PopupManager.propTypes = {
   isOpen: PropTypes.bool,
};


export default memo(PopupManager);