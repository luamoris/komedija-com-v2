import React from 'react';

import Icon from '../Icon/Icon';
import './BtnTargetLink.css';

export default function BtnTargetLink({ href, src, title, alt = '' }) {
   return (
      <>
         <li className='social-item _unselect'>
            <a href={href} className='target-link' target='_blank'>
               <Icon classFather='target-link__box' src={src} alt={alt} />
               <span className="target-link__title">{title}</span>
            </a>
         </li>
      </>
   );
};
