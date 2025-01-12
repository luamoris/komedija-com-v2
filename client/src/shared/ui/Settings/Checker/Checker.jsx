import { memo } from "react";
import PropTypes from "prop-types";

import "./Checker.css";


function Checker({ toCheck = () => null }) {
   return (
      <>
      </>
   );
}


Checker.propTypes = {
   toCheck: PropTypes.func,
}

export default memo(Checker);