import PropTypes from 'prop-types';
import { TranslationProvider } from '../../shared/context/TranslationContext.jsx';
import { GlobalSettingsProvider } from "../../shared/context/GlobalSettingsContext.jsx";


export default function AppProvider({ children }) {
   return (
      <GlobalSettingsProvider>
         <TranslationProvider>
            {children}
         </TranslationProvider>
      </GlobalSettingsProvider>
   );
};


AppProvider.propTypes = {
   children: PropTypes.node.isRequired,
}