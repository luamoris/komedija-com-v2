import {memo} from 'react';
import PropTypes from 'prop-types';
import Burger from "../Burger/Burger";
import "./Tools.css";


function Tools({toggleMenu}) {
   return (
      <div className="tools">
         <div className="tools-start">
            <Burger classFather="tools__btn-menu" toggle={toggleMenu} />
         </div>
         <div className="tools-middle"></div>
         <div className="tools-end"></div>
      </div>
   );
}


Tools.propTypes = {
   toggleMenu: PropTypes.func,
}

export default memo(Tools);