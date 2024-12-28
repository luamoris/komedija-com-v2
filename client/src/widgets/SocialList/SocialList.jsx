import React from "react";

import BtnTargetLink from "../../shared/ui/BtnTargetLink/BtnTargetLink";
import "./SocialList.css";

function SocialList({ list }) {
   return (
      <>
         <nav className="social">
            <ul className="social__list">
               {list.map((social, key) => <BtnTargetLink key={key} {...social} />)}
            </ul>
         </nav>
      </>
   );
}

export default SocialList;