import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AppLocation({ children }) {
   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      console.log(location.pathname);
   }, [location.pathname]);

   return <>{children}</>;
}