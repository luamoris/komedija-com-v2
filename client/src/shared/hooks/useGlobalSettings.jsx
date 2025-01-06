import { useContext } from "react";
import { GlobalSettingsContext } from "../context/GlobalSettingsContext";

export default function useGlobalSettings() {
   const gsContext = useContext(GlobalSettingsContext);

   if (!gsContext) throw new Error('useGlobalSettings must be used within a GlobalSettingsProvider');

   return gsContext;
}