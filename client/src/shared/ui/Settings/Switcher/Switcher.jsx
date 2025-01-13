import { memo, useCallback, useState } from "react";
import PropTypes from "prop-types";

import "./Switcher.css";

const _MODE = { start: 'start', end: 'end' };


function Switcher({ toggle = () => null, currentMode = _MODE.start, classFather = '' }) {
   const [mode, setMode] = useState(currentMode);

   const toggleSwitch = useCallback(() => {
      setMode((prev) => prev === _MODE.start ? _MODE.end : _MODE.start);
      toggle();
   }, [toggle]);

   return (
      <div className={`switcher switcher_mode_${mode} ${classFather}`} onClick={toggleSwitch}>
         <div className="switcher__core"></div>
      </div>
   );
}


Switcher.propTypes = {
   toggle: PropTypes.func,
   currentMode: PropTypes.string,
   classFather: PropTypes.string,
}

export default memo(Switcher);