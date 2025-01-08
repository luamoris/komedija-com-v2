import {memo} from 'react';
import PropTypes from 'prop-types';
import './BtnTargetLink.css';
import Icon from '../Icon/Icon';


function BtnTargetLink({ href, src, title, alt = '' }) {
   return (
      <li className='social-item _unselect'>
         <a href={href} className='target-link' target='_blank'>
            <Icon classFather='target-link__box' src={src} alt={alt} />
            <span className="target-link__title">{title}</span>
         </a>
      </li>
   );
}


BtnTargetLink.propTypes = {
   href: PropTypes.string.isRequired,
   src: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   alt: PropTypes.string,
}

export default memo(BtnTargetLink);