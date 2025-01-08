import {memo} from "react";
import PropTypes from "prop-types";

import BtnTargetLink from "../../shared/ui/BtnTargetLink/BtnTargetLink";

import "./SocialList.css";


function SocialList({ list }) {
   return (
      <nav className="social">
         <ul className="social__list">

            {list.map((social, key) => <BtnTargetLink key={key} {...social} />)}

         </ul>
      </nav>
   );
}


SocialList.propTypes = {
   list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default memo(SocialList);