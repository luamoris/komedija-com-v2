import PropTypes from 'prop-types';

import {LanguageProvider} from "../../shared/context/LanguageContext.jsx";
import {GlobalSettingsProvider} from "../../shared/context/GlobalSettingsContext.jsx";


export default function AppProvider({children}) {
   return (
      <GlobalSettingsProvider>
         <LanguageProvider>
            {children}
         </LanguageProvider>
      </GlobalSettingsProvider>
   );
};


AppProvider.propTypes = {
   children: PropTypes.node.isRequired,
}