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

   if (tr.TRANSITION.getCurrentCode().code !== tr.CODE.code) {
      // console.log('!===');
      // window.location.href = location.pathname;
   }

   useEffect(() => {
      // console.clear();
      console.log("App Location Effect");
      console.log(`== Path: ${JSON.stringify(location)}`);
      console.log(`== Code CTX: ${JSON.stringify(tr.CODE)}`);
      console.log(`== Code Current: ${JSON.stringify(tr.TRANSITION.getCurrentCode())}`);
      console.log(`== Init: ${tr.TRANSITION.isInit()}`);

      const currentCode = tr.TRANSITION.getCurrentCode();

      if (!tr.TRANSITION.isInit()) {
         console.log(`====> Init code: ${currentCode.code}`);
         tr.TRANSITION.setCode(currentCode.code);
      }

      if (!currentCode.ok) {
         console.log('====> Error 404');
      }

      if (currentCode.code !== tr.CODE.code) {
         console.log('====> Изменился маршрут!');
         // tra.SET_UPDATE(currentCode.code);
         // navigate(location.pathname);
         // window.location.href = location.pathname;
      }

   }, [location]);

   return children;
}


AppLocation.propTypes = {
   children: PropTypes.node.isRequired
};