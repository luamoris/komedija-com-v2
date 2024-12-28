import React from "react";

import HeadMeta from "../../effects/HeadMeta/HeadMeta";
import "./NotFound.css";

export default function NotFound({ LANG, ...props }) {

   return (
      <>
         {/* META */}
         <HeadMeta path={LANG.path} meta={LANG.meta} {...props} />
         {/* CONTENT */}
         <h1 style={{ color: "#ffffff" }}>404</h1>
      </>
   )
}