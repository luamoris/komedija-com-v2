// IMPORT
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// STYLE
import './app/styles/$main.css';

// COMPONENTS
import App from './app/App';
import GridCanvas from './effects/BG/ui/GridBG';

// ========== VALUES

const wrapper = document.getElementById('wrapper');
const bg = document.getElementById('bg');

const WrapperRoot = createRoot(wrapper);
const BgRoot = createRoot(bg);

const initWrapper = () => WrapperRoot.render(<StrictMode><App /></StrictMode>);
const initBg = () => BgRoot.render(<GridCanvas />);

// ========== START
initWrapper();
initBg();

// TEST
// import {GLOBAL_SETTINGS} from "./shared/data/globalSettings.data.js";
// import GlobalSettings from "./shared/lib/GlobalSettings.js";
//
// const gs = new GlobalSettings(GLOBAL_SETTINGS);
// console.log(gs.getAlleTypes());
// console.log(gs.getValuesByType("scheme"));
// console.log(gs.getDefaultByType("scheme"));
// console.log(gs.setValueToStorage("scheme", "2 "));
// console.log(gs.getCurrentByType("scheme"));

