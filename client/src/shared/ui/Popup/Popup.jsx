import {memo} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Popup.css";


const _popupClasses = (isOpen, ...classes) => classNames('popup', ...classes, {'popup__open': isOpen});


function Popup({ children, classFather = '', isOpen = false }) {
   return (
      <dialog className={_popupClasses(isOpen, classFather)} open>
         {children}
      </dialog>
   );
}

Popup.propTypes = {
   children: PropTypes.node,
   classFather: PropTypes.string,
   isOpen: PropTypes.bool,
}

export default memo(Popup);