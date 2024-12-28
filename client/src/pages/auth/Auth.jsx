import React from "react";

import HeadMeta from "../../effects/HeadMeta/HeadMeta";
import "./Auth.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Auth({ LANG, ...props }) {
   const navigation = useNavigate();
   const location = useLocation();

   const fromPage = location.state?.from?.pathname || '/';

   return (
      <>
         {/* META */}
         <HeadMeta path={LANG.path} meta={LANG.meta} {...props} />
         {/* CONTENT */}
         <h1 style={{ color: "#ffffff" }}>AUTH CONTENT - USER FROM {fromPage}</h1>
      </>
   );
}
