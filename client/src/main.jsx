// IMPORT
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// STYLE
import './app/styles/$main.css';

// COMPONENTS
import App from './app/App';
import GridCanvas from './effects/BG/ui/GridBG';

// DATA
import { LANG } from './shared/data/uilang/lang.js';

// ========== VALUES

const wrapper = document.getElementById('wrapper');
const bg = document.getElementById('bg');

const WrapperRoot = createRoot(wrapper);
const BgRoot = createRoot(bg);

const initWrapper = () => WrapperRoot.render(<StrictMode><App LANG={LANG} /></StrictMode>);
const initBg = () => BgRoot.render(<GridCanvas />);

// ========== START
initWrapper();
initBg();

