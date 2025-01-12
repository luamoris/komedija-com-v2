import { memo } from "react";
import PropTypes from "prop-types";

import "./Changer.css";


function Changer({ toChange = () => null }) {
   return (
      <>
      </>
   );
}


Changer.propTypes = {
   toChange: PropTypes.func,
}

export default memo(Changer);