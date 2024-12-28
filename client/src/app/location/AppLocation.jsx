import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AppLocation({ onPathChange, children }) {
   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      console.log(location.pathname);

      const { pathname } = location;
      const langCode = pathname.split('/')[1];
      const supportedLanguages = ['ru', 'en', 'de'];
      if (supportedLanguages.includes(langCode)) {
         onPathChange(langCode);
      } else { }

   }, [location.pathname, onPathChange]);

   return <>{children}</>;
}