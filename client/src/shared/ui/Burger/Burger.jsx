import {memo} from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import "./Burger.css";


const _burgerClasses = (classFather) => classNames('burger-box', classFather, '_unselect');


function Burger({classFather = '', toggle}) {
   return (
      <div className={_burgerClasses(classFather)} onClick={toggle}>
         <div className="burger"></div>
      </div>
   );
}


Burger.propTypes = {
   classFather: PropTypes.string,
   toggle: PropTypes.func.isRequired,
}

export default memo(Burger);