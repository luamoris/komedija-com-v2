import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import {memo} from "react";

import { CONFIG } from "../../shared/data/uilang/config.js";

/**
 * head:
 *    type           string      og type
 *    title          string      short name of page
 *    path (long)    string      global long path
 *    description    string
 *    keywords       string
 * 
 * */

const _title = (title) => CONFIG.name + ' | ' + title;

const _alternates = (path) => {
  const pathList =  path.replace(CONFIG.domain, '').split('/');
  if (!pathList.length || pathList?.[1] === '*') return [];
  const alternates = [];
   pathList[0] = CONFIG.domain;
   for (const sl of CONFIG.lang.supported) {
      pathList[1] = sl;
      alternates.push({ code: sl, href: pathList.join('/')});
   }
   return alternates;
};


function Page({ head, children }) {
   const al = _alternates(head.path);

   return (
      <>

         <Helmet>

            {
               al.length && <>
                  <link rel="canonical" href={al[0].href}/>
                  <link rel="alternate" href={al[0].href} hrefLang={al[0].code}/>
                  <link rel="alternate" href={al[1].href} hrefLang={al[1].code}/>
                  <link rel="alternate" href={al[2].href} hrefLang={al[2].code}/>
                  <link rel="alternate" href={al[0].href} hrefLang='x-default'/>

                  <meta property="og:locale" content={`${al[0].code}_${CONFIG.lang.country}`}/>
                  <meta property="og:locale:alternate" content={`${al[1].code}_${CONFIG.lang.country}`}/>
                  <meta property="og:locale:alternate" content={`${al[2].code}_${CONFIG.lang.country}`}/>

                  <meta property="og:url" content={al[0].href}/>
               </>
            }

            <title>{_title(head.title)}</title>

            <meta name="title" content={_title(head.title)}/>
            <meta name="description" content={head.description}/>
            <meta name="keywords" content={head.keywords}/>

            <meta property="og:type" content={CONFIG.og.type[head.type]}/>

            <meta property="og:title" content={_title(head.title)}/>
            <meta property="og:image" content="/favicon/favicon.ico"/>
            <meta property="og:description" content={head.description}/>

         </Helmet>

         {children}
      </>
   );
}


Page.propTypes = {
   head: PropTypes.object.isRequired,
   children: PropTypes.node.isRequired,
};

export default memo(Page);