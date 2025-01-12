import { memo, forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Popup.css";


const _popupClasses = (isOpen, ...classes) => classNames('popup', ...classes, { 'popup__open': isOpen });


const Popup = forwardRef(({ children, classFather = '', isOpen = false }, ref) => {
   return (
      <dialog className={_popupClasses(isOpen, classFather)} ref={ref} open>
         {children}
      </dialog>
   );
});

Popup.propTypes = {
   children: PropTypes.node,
   classFather: PropTypes.string,
   isOpen: PropTypes.bool,
}

export default memo(Popup);