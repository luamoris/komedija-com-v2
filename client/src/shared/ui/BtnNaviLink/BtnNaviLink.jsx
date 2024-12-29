import { memo } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./BtnNaviLink.css";

import Icon from "../Icon/Icon";


const _btnNaviLinkClasses = ({isActive}) => classNames('navigation__item', 'navi-link', '_unselect', { 'navigation__item_active': isActive })


function BtnNaviLink({ path, src, title, alt = '' }) {
   return (
      <NavLink to={path} className={_btnNaviLinkClasses} end>
         <Icon classFather='navi-link__box' src={src} alt={alt} />
         <span className="navi-link__title">{title}</span>
      </NavLink>
   );
}


BtnNaviLink.propTypes = {
  path: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default memo(BtnNaviLink);
