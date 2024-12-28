import React from "react";
import { NavLink } from "react-router-dom";

import HeadMeta from "../../effects/HeadMeta/HeadMeta";
import "./Home.css";

export default function Home({ LANG, ...props }) {
   return (
      <>
         {/* META */}
         <HeadMeta path={LANG.path} meta={LANG.meta} {...props} />
         {/* CONTENT */}
         <h1 style={{ color: "#ffffff" }}>HOME CONTENT</h1>
         <NavLink to="/ru" style={{ color: "#ffffff", margin: '10px' }}>RU</NavLink>
         <NavLink to="/en" style={{ color: "#ffffff", margin: '10px' }}>EN</NavLink>
         <NavLink to="/de" style={{ color: "#ffffff", margin: '10px' }}>DE</NavLink>
      </>
   );
}
