import {useCallback, memo} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import LangCode from "../../shared/ui/LangCode/LangCode.jsx";
import "./SwitchLanguages.css";


function SwitchLanguages({codes, currentCode, setCode}) {
   const location = useLocation();
   const navigate = useNavigate();

   const switchLang = useCallback(
      (newCode) => {
         setCode(newCode);
         const newPath = location.pathname.replace(currentCode, newCode);
         navigate(newPath, { replace: true });
      }, [location.pathname, navigate, setCode, currentCode]
   );

   const handleClick = useCallback(
      (code) => () => switchLang(code),
      [switchLang]
   );

   return (
      <div className="lang">
         {codes.map((code) =>
            <LangCode key={code} code={code} onClick={handleClick(code)} isActive={code === currentCode} />
         )}
      </div>
   )
}


SwitchLanguages.propTypes = {
   codes: PropTypes.arrayOf(PropTypes.string).isRequired,
   currentCode: PropTypes.string.isRequired,
   setCode: PropTypes.func.isRequired,
};

export default memo(SwitchLanguages);