import React from "react";
import { useLocation, Navigate } from "react-router-dom";

export default function Private({ path, children }) {
   const location = useLocation();
   const auth = false;

   if (!auth) {
      return <Navigate to={path} state={{ from: location }} replace />
   }

   return children;
}
