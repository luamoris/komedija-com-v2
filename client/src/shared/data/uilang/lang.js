import { ru } from "./ru";
import { en } from "./en";
import { de } from "./de";

const LANG_LIST = { ru, en, de };

export const LANG = {

   dispatch: (lang) => LANG_LIST?.[lang] || LANG_LIST.ru

};