import {useState, useLayoutEffect} from "react";
import {DEVICES as D, DEVICES_MEDIA as DM} from "../data/app.settings.js";


export default function useMatchMedia() {
   const mediaQueryLists = [DM.mobile, DM.tablet, DM.desktop].map((query) => matchMedia(query));

   const getValues = () => mediaQueryLists.map((mql) => mql.matches);

   const [values, setValues] = useState(getValues);

   useLayoutEffect(() => {
      const handle = () => setValues(getValues);
      mediaQueryLists.forEach((mql) => mql.addEventListener("change", handle));
      return () => mediaQueryLists.forEach((mql) => mql.removeEventListener("change", handle));
   }, []);

   return [D.mobile, D.tablet, D.desktop].reduce((acc, screen, id) => ({
      ...acc,
      [screen]: values[id]
   }), {});
}