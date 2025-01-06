import { useContext } from "react";
import { TranslationActionContext } from "../context/TranslationContext";

export default function useTranslationActions() {
   const taContext = useContext(TranslationActionContext);

   if (!taContext) throw new Error('useTranslationAction must be used within a TranslationActionsProvider');

   return taContext;
}