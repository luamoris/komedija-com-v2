import {memo, useCallback, useState} from "react";

import './Sidebar.css';

import SocialList from "../SocialList/SocialList";
import NaviList from "../NaviList/NaviList";
import Tools from "../../shared/ui/Tools/Tools.jsx";
import classNames from "classnames";

import { socialMedia } from "../../shared/data/socialMedia.data";

const FOOTER_TEXT = '© Stand Up Community "KOMEDIJA"';

const _sidebarClasses = (short) => classNames('sidebar', { 'sidebar_short': short });


function Sidebar() {
   const [short, setShort] = useState(false);

   const handleShort = useCallback(() => setShort(!short), [short]);

   return (
      <aside className={_sidebarClasses(short)}>

         <div className="sidebar-header">

            <Tools toggle={handleShort} />
            <div className="sidebar-header__separator"></div>
            <NaviList />
            <div className="sidebar-header__separator"></div>
            <SocialList list={socialMedia} />

         </div>

         <div className="sidebar-footer">

            <span className="sidebar-footer__title">{FOOTER_TEXT}</span>

         </div>

      </aside>
   );
}


export default memo(Sidebar);