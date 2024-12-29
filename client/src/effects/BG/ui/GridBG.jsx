import { memo, useEffect, useRef } from 'react';

import './GridBG.css';
import GridBG from '../lib/GridBG.js';


function GridCanvas() {
   const canvasRef = useRef(null);
   const gridRef = useRef(null);

   useEffect(() => {
      if (canvasRef.current) {
         gridRef.current = new GridBG(canvasRef.current.id);
         return () => gridRef.current.stopAnimation();
      }
   }, []);

   return <canvas id='canvasGridBG' ref={canvasRef} />
}


export default memo(GridCanvas);