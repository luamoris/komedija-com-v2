import React from "react";

import HeadMeta from "../../effects/HeadMeta/HeadMeta";
import "./Profile.css";

export default function Profile({ LANG, ...props }) {
   return (
      <>
         {/* META */}
         <HeadMeta path={LANG.path} meta={LANG.meta} {...props} />
         {/* CONTENT */}
         <h1 style={{ color: "#ffffff" }}>PROFILE CONTENT</h1>
      </>
   );
}