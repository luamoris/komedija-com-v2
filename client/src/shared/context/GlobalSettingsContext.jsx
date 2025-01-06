import { createContext, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import GlobalSettings from "../lib/GlobalSettings.js";
import { APP_SETTINGS } from "../data_2/app.settings.js";


const gs = new GlobalSettings(APP_SETTINGS);


export const GlobalSettingsContext = createContext(null);
export const GlobalSettingsActionsContext = createContext(null);


export const GlobalSettingsProvider = ({ children }) => {
   const [settings, setSettings] = useState(gs.getCurrentSettings());

   const updateSettings = useCallback((type, value) => {
      if (gs.setValueToStorage(type, value)) {
         setSettings((prevState) => ({ ...prevState, [type]: value }));
      }
   }, []);

   const value = useMemo(() => ({ GS: settings }), [settings]);
   const actions = useMemo(() => ({ GS_UPDATE: updateSettings }), [updateSettings]);

   return (
      <GlobalSettingsContext.Provider value={value}>
         <GlobalSettingsActionsContext.Provider value={actions}>
            {children}
         </GlobalSettingsActionsContext.Provider>
      </GlobalSettingsContext.Provider>
   );
};


GlobalSettingsProvider.propTypes = {
   children: PropTypes.node.isRequired,
};