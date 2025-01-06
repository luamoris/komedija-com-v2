import PropTypes from 'prop-types';

// import { LanguageProvider } from "../../shared/context/LanguageContext.jsx";
import { TranslationProvider } from '../../shared/context/TranslationContext.jsx';
import { GlobalSettingsProvider } from "../../shared/context/GlobalSettingsContext.jsx";


export default function AppProvider({ children }) {
   return (
      <GlobalSettingsProvider>
         <TranslationProvider>
            {/* <LanguageProvider> */}
            {children}
            {/* </LanguageProvider> */}
         </TranslationProvider>
      </GlobalSettingsProvider>
   );
};


AppProvider.propTypes = {
   children: PropTypes.node.isRequired,
}