import React from 'react';
import { useEffect, useRef, useState } from 'react';

import GridBG from '../lib/GridBG.js';
import './GridBG.css';

export default function GridCanvas() {
   const canvasRef = useRef(null);
   const gridRef = useRef(null);

   useEffect(() => {
      if (canvasRef.current) {
         gridRef.current = new GridBG(canvasRef.current.id);
         return () => gridRef.current.stopAnimation();
      }
   }, []);

   return <canvas id='canvasGridBG' ref={canvasRef} />
};
