import {memo} from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import "./LangCode.css";


const _langCodeClasses = (isActive) => classNames('lang__code', '_unselect', { 'lang__code_active': isActive });


function LangCode({code, isActive = false, onClick}) {
   return (
      <div onClick={onClick} className={_langCodeClasses(isActive)}>{code.toUpperCase()}</div>
   );
}


LangCode.propTypes = {
   code: PropTypes.string.isRequired,
   isActive: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired,
};

export default memo(LangCode);

