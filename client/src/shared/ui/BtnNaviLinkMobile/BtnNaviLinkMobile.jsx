import { memo } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./BtnNaviLinkMobile.css";
import Icon from "../Icon/Icon";


const _btnNaviLinkClasses = ({isActive}) => classNames('m-navigation__item', 'm-navi-link', '_unselect', { 'm-navigation__item_active': isActive })


function BtnNaviLinkMobile({ path, src, title, alt = '' }) {
   return (
      <NavLink to={path} className={_btnNaviLinkClasses} end>
         <Icon classFather='m-navi-link__box' src={src} alt={alt} />
         <span className="m-navi-link__title">{title}</span>
      </NavLink>
   );
}


BtnNaviLinkMobile.propTypes = {
   path: PropTypes.string.isRequired,
   src: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   alt: PropTypes.string,
};

export default memo(BtnNaviLinkMobile);