import { useContext } from "react";
import { GlobalSettingsActionsContext } from "../context/GlobalSettingsContext";

export default function useGlobalSettingsActions() {
   const gsaContext = useContext(GlobalSettingsActionsContext);

   if (!gsaContext) throw new Error('useGlobalSettingsActions must be used within a GlobalSettingsActionsProvider');

   return gsaContext;
}