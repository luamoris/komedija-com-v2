import { memo } from 'react';
import PropTypes from 'prop-types';
import Burger from "../../shared/ui/Burger/Burger";
import "./Tools.css";


function Tools({ children, toggleMenu }) {
   return (
      <div className="tools">
         <div className="tools-start">
            <Burger classFather="tools__btn-menu" toggle={toggleMenu} />
         </div>
         <div className="tools-middle"></div>
         <div className="tools-end">{children}</div>
      </div>
   );
}


Tools.propTypes = {
   children: PropTypes.node,
   toggleMenu: PropTypes.func,
}

export default memo(Tools);