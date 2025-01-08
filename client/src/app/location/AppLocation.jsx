import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import useTranslation from "../../shared/hooks/useTranslation.jsx";
import useTranslationActions from "../../shared/hooks/useTranslationActions.jsx";


export default function AppLocation({ children }) {
   const location = useLocation();
   const navigate = useNavigate();

   const tr = useTranslation();
   const tra = useTranslationActions();

   console.log("App Location");

   useEffect(() => {
      console.log("\t\t\t\t\t App Location Effect");
      console.log(`Path: ${JSON.stringify(location)}`);
      console.log(`Code Context: ${JSON.stringify(tr.CODE)}`);
      console.log(`Code Current: ${JSON.stringify(tr.TRANSLATION.getCurrentCode())}`);
      console.log(`Init: ${tr.TRANSLATION.isInit()}\n`);

      if (location.pathname === "/404") {
         console.log(`===> Path Error: ${location.pathname}`);
         return;
      }

      const currentCode = tr.TRANSLATION.getCurrentCode();

      if (!tr.TRANSLATION.isInit()) {
         console.log(`====> Init code: ${currentCode.code}`);
         tr.TRANSLATION.setCode(currentCode.code);
      }

      if (!currentCode.ok) {
         console.log('====> Ошибка 404');
         navigate("/404", { replace: true });
      }

      if (currentCode.code !== tr.CODE.code) {
         console.log('====> Изменился маршрут!');
         tra.SET_UPDATE(currentCode.code);
      }

   }, [location]);

   return children;
}


AppLocation.propTypes = {
   children: PropTypes.node.isRequired
};