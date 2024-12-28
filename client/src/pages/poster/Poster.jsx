import React from "react";

import HeadMeta from "../../effects/HeadMeta/HeadMeta";
import "./Poster.css";

export default function Poster({ LANG, ...props }) {
   return (
      <>
         {/* META */}
         <HeadMeta path={LANG.path} meta={LANG.meta} {...props} />
         {/* CONTENT */}
         <h1 style={{ color: "#ffffff" }}>POSTER CONTENT</h1>
      </>
   );
}