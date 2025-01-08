import {memo} from "react";
import PropTypes from "prop-types";
import "./Icon.css";


function Icon({ classFather = '', src, alt = '' }) {
   return (
      <div className={`icon-box ${classFather}`}>
         <img className='icon-pic' src={src} alt={alt} />
      </div>
   );
}


Icon.propTypes = {
   classFather: PropTypes.string,
   src: PropTypes.string.isRequired,
   alt: PropTypes.string,
};

export default memo(Icon);