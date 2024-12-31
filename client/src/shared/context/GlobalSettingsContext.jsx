import {createContext, useState, useMemo, useCallback} from "react";
import PropTypes from "prop-types";

import GlobalSettings from "../lib/GlobalSettings.js";
import {GLOBAL_SETTINGS} from "../data/globalSettings.data.js";


const gs = new GlobalSettings(GLOBAL_SETTINGS);

export const GlobalSettingsContext = createContext(null);


export const GlobalSettingsProvider = ({children}) => {
   const [settings, setSettings] = useState(gs.getCurrentSettings());

   const handleSetSettings = useCallback((type, value) => {
      if(gs.setValueToStorage(type, value)) {
         setSettings((prevState) => ({...prevState, [type]: value}));
      }
   }, [setSettings]);

   const contextValue = useMemo(() => ({
      GL: settings,
      SET_GL: handleSetSettings,
   }), [settings, handleSetSettings]);

   return (
      <GlobalSettingsContext.Provider value={contextValue}>
         {children}
      </GlobalSettingsContext.Provider>
   );
};


GlobalSettingsProvider.propTypes = {
   children: PropTypes.node.isRequired,
};