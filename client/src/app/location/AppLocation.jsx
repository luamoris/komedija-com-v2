import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


export default function AppLocation({ children }) {
   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      console.log(location);
   }, [location]);

   return children;
}


AppLocation.propTypes = {
   children: PropTypes.node.isRequired
};