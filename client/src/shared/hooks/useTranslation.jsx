import { useContext } from "react";
import { TranslationContext } from "../context/TranslationContext";

export default function useTranslation() {
   const translationContext = useContext(TranslationContext);

   if (!translationContext) throw new Error('useTranslation must be used within a TranslationProvider');

   return translationContext;
}