import { useLocation, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Private({ path, children }) {
   const location = useLocation();
   const auth = false;

   if (!auth) return <Navigate to={path} state={{ from: location }} replace />

   return children;
}

Private.propTypes = {
   path: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired
}
