import { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import "./Burger.css";


const _burgerClasses = (classFather) => classNames('burger-box', classFather, '_unselect');


const Burger = forwardRef(({ classFather = '', toggle }, ref) => {
   return (
      <div className={_burgerClasses(classFather)} onClick={toggle} ref={ref || null}>
         <div className="burger"></div>
      </div>
   );
})


Burger.propTypes = {
   classFather: PropTypes.string,
   toggle: PropTypes.func.isRequired,
}

export default memo(Burger);