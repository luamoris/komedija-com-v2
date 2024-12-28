import React from "react";

import "./Icon.css";

export default function Icon({ classFather = '', src, alt = '' }) {
   return (
      <>
         <div className={`icon-box ${classFather}`}>
            <img className='icon-pic' src={src} alt={alt} />
         </div>
      </>
   );
}
