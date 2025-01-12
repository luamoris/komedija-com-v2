import { memo } from 'react';
import PropTypes from 'prop-types';
import Burger from "../../shared/ui/Burger/Burger";
import Switcher from '../../shared/ui/Settings/Switcher/Switcher';
import "./Tools.css";


function Tools({ toggleMenu, toggleScheme, currentScheme }) {
   return (
      <div className="tools">
         <div className="tools-start">
            <Burger classFather="tools__btn-menu" toggle={toggleMenu} />
         </div>
         <div className="tools-middle"></div>
         <div className="tools-end">
            <Switcher toggle={toggleScheme} currentMode={currentScheme} />
         </div>
      </div>
   );
}


Tools.propTypes = {
   toggleMenu: PropTypes.func,
   toggleScheme: PropTypes.func,
   currentScheme: PropTypes.string
}

export default memo(Tools);