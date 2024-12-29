import {memo} from 'react';
import PropTypes from 'prop-types';

import "./Tools.css";

import Burger from "../Burger/Burger";


function Tools({toggle}) {
   return (
      <div className="tools">
         <div className="tools-start">
            <Burger classFather="tools__btn-menu" toggle={toggle} />
         </div>
         <div className="tools-middle"></div>
         <div className="tools-end"></div>
      </div>
   );
}


Tools.propTypes = {
   toggle: PropTypes.func,
}

export default memo(Tools);