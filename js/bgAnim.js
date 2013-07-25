(function(){  //setup bgVars
   window.bgVars || (window.bgVars = {});
})();

//set up vars for game of life
(function(namespace){  //GoL
   var _Canvas = {};
   var _Ctx = {};
   var xBlockSize = 3;
   var yBlockSize = 3;
   var xBlocks = 0;
   var yBlocks = 0;
   var bornVals = [3];
   var stayAliveVals = [2, 3];
   var cGrid;
   var cGridUp;
   var cGridDown;
   var cGrid2;

   function splitMemCopy(dst, src, breakOffset){
      //creates a copy of src that is swapped at the breakOffset, effectivly 'rotating' the array
      var remainderLen = src.length - breakOffset;
      var srcOffset = new Uint8Array(src.buffer, 0, breakOffset);
      var srcRemainder = new Uint8Array(src.buffer, breakOffset, remainderLen);
      var destOffset = new Uint8Array(dst.buffer, remainderLen, breakOffset);
      var destRemainder = new Uint8Array(dst.buffer, 0, remainderLen);

      destOffset.set(srcOffset);
      destRemainder.set(srcRemainder);
   };

   function setupCalcs(){
      //sets up shifted typed arrays to speed up GoL neighbor calculation
      splitMemCopy(cGridDown, cGrid, xBlocks);
      splitMemCopy(cGridUp, cGrid, (cGrid.length - xBlocks));
   };

   function cirInd(index, mod){
      //returns modulus, array-wrapping value to implement circular array
      if(index<0){index+=mod;}
      return index%mod;
   };

   function calcNeighbors(rep){
      var foo = xBlocks;
      var grid = cGrid;
      var mod = grid.length;
      var neighbors = grid[cirInd(rep-foo-1, mod)] + grid[cirInd(rep-foo, mod)] + grid[cirInd(rep-foo+1, mod)] + grid[cirInd(rep-1, mod)] + grid[cirInd(rep+1, mod)] + grid[cirInd(rep+foo-1, mod)] + grid[cirInd(rep+foo, mod)] + grid[cirInd(rep+foo+1, mod)];
      /*var cG = cGrid;
      var cGU = cGridUp;
      var cGD = cGridDown;
      var neighbors = cGU[rep-1] + cGU[rep] + cGU[rep+1] + cG[rep-1] + cG[rep+1] + cGD[rep-1] + cGD[rep] + cGD[rep+1];*/
      return neighbors;
   };

   function lifeRules(rep, neighbors){
         cGrid2[rep] = 0;
         if(cGrid[rep] == 1){  //stay alive rules
            for(var rep2=0;rep2<stayAliveVals.length;rep2++){
               if(neighbors==stayAliveVals[rep2]){cGrid2[rep] = 1;}
            }
         }
         if(cGrid[rep] == 0){  //'born' rules
            for(var rep2=0;rep2<bornVals.length;rep2++){
               if(neighbors==bornVals[rep2]){cGrid2[rep] = 1;}
            }
         }
   };

   function fastFillLive(){
      //console.time("init");
      var xPix = _Canvas.width;
      var yPix = _Canvas.height;
      var gArray = _Ctx.imageData.data;
      //gArray is a Uint8BoundedArray - remap to uint32 for block manipulation
      var gArray32 = new Uint32Array(gArray.buffer);

      //define pixel data block for a live pixel
      var live8 = new Uint8Array(4);
      live8[0] = 140;
      live8[3] = 255;
      var subLive32 = new Uint32Array(live8.buffer);
      var live32 = new Uint32Array(xBlockSize); //length in 32 bit chunks
      for(var rep = 0;rep<xBlockSize;rep++){
         live32.set(subLive32, rep);
      }

      //define pixel data block for a dead pixel
      var dead8 = new Uint8Array(4);
      dead8[0] = 100;
      dead8[3] = 255;
      var subDead32 = new Uint32Array(dead8.buffer);
      var dead32 = new Uint32Array(xBlockSize);
      for(var rep=0;rep<xBlockSize;rep++){
         dead32.set(subDead32, rep);
      }

      //set up uint32 array to hold entire row pixel data at once
      var row32 = new Uint32Array(xPix);
      var rowLen = row32.length;
      var block32Len = live32.length;
      var clampXBlocks = (xPix/xBlockSize)>>0; //bitwise Math.floor

      var yOffset;

      //console.timeEnd('init');
      //console.time('copy');

      for(var yBlockRep=0; yBlockRep<yBlocks; yBlockRep++){
         //console.time('live');
         yOffset = yBlockRep * xBlocks;
         for(var xBlockRep=0; xBlockRep<clampXBlocks; xBlockRep++){
            if(cGrid[xBlockRep + yOffset] == 0){
               row32.set(dead32, xBlockRep * block32Len);
            }
            else{
               row32.set(live32, xBlockRep * block32Len);
            }
         }
         //console.timeEnd('live');
         //console.time('block');
         for(var yBlockSizeRep=0; yBlockSizeRep<yBlockSize; yBlockSizeRep++){
            if((yBlockSizeRep + (yBlockRep * yBlockSize)) < yPix){
               gArray32.set(row32, rowLen * (yBlockSizeRep + (yBlockRep * yBlockSize)));
            }
         }
         //console.timeEnd('block');
      }
      //console.timeEnd('copy');
      //console.time('render');
      _Ctx.putImageData(_Ctx.imageData, 0, 0);
      //_Ctx.drawImage(_Ctx.imageData, 0, 0);
      //console.timeEnd('render');
   };

   namespace.about = "This is the famous Conway Game of Life";
   namespace.initBgVars = function(iCanvas, iCtx){
      var seedVals = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 39, 43, 47];
      _Canvas = iCanvas;
      _Ctx = iCtx;
      xBlocks = Math.round(_Canvas.width/xBlockSize) + 1;
      yBlocks = Math.round(_Canvas.height/yBlockSize) + 1;
      cGrid = new Uint8Array(xBlocks * yBlocks);
      for(var rep=0;rep<(xBlocks * yBlocks);rep++){
         cGrid[rep] = rep%seedVals[rep%(seedVals.length)]%2;
      }
      cGridUp = new Uint8Array(xBlocks * yBlocks);
      cGridDown = new Uint8Array(xBlocks * yBlocks);
      cGrid2 = new Uint8Array(xBlocks * yBlocks);
   };
   namespace.userInput = function(iX, iY){
      console.log(iX);
      console.log(iY);
      var gridX = Math.round(iX / xBlockSize);
      var gridY = Math.round(iY / yBlockSize);
      cGrid[gridX + (gridY * xBlocks)] = 1;
   };
   namespace.updateBgCanvas = function(){
      //convert grid data to graphics data for drawing
      //console.time('fastFill');
      fastFillLive();
      //console.timeEnd('fastFill');

      //calculate next generation to buffer
      //console.time('calcsetup');
      //setupCalcs();
      //console.timeEnd('calcsetup');
      //console.time('calcs');
      var neighbors = 0;
      var cLength = cGrid.length;
      for(var rep=0;rep<cLength;rep++){
         //add up the live squares in the 8 neighbor blocks
         neighbors = calcNeighbors(rep);
         //implement GoL ruleset
         lifeRules(rep, neighbors);
      }
      //console.timeEnd('calcs');
      //seed with random noise to keep dynamic and copy to display buffer
      //console.time('random');
      for(var rep=0;rep<cLength;rep++){
         if(Math.random()<0.0002){cGrid2[rep] = 1;}
      }
      //console.timeEnd('random');
      //copy calculate next gen values back into working array
      cGrid.set(cGrid2);
   };
})(bgVars.GoL = bgVars || {});



(function(namespace){  //lattice
   var _Canvas = {};
   var _Ctx = {};
   var lCanvas = document.createElement('canvas');
   var lCtx = lCanvas.getContext('2d');
   var lWidth, lHeight;
   var aGrid = [];
   var gridSize, rowHeight;
   var radius;
   var kT;

   function dist(dX, dY){
      var distMag = Math.sqrt((dX * dX) + (dY * dY));
      return distMag;
   };

   function forceEq(iX, iY){
      var mag = dist(iX, iY);
      if(mag < gridSize){
         return (gridSize - mag)/10;
      }else{
         return (mag - gridSize)/1;
      }
   };

   function calcThermal(atom){
      //simulates Brownian motion noise
      atom.deltaX = ((Math.random()*2)>>0 == 0) ? kT * Math.pow(Math.random() * 2.7, 3) : -kT * Math.pow(Math.random() * 2.7, 3);
      atom.deltaY = ((Math.random()*2)>>0 == 0) ? kT * Math.pow(Math.random() * 2.7, 3) : -kT * Math.pow(Math.random() * 2.7, 3);
   };

   function calcNeighborForce(atom){
      //sums up the attractive/respulsive forces from neighbors
      var dX, dY, mag;
      var dDeltaX = 0, dDeltaY = 0;
      for(var rep=0;rep<atom.neighbors.length;rep++){
         dX = (atom.neighbors[rep].x - atom.x);
         dY = (atom.neighbors[rep].y - atom.y);
         mag = Math.pow(forceEq(dX, dY)/100, 2);
         //if this is a repulsor atom, make all force repulsive and strong
         if(atom.neighbors[rep].isRepulsor == true){}
         dDeltaX += (dX * mag);
         dDeltaY += (dY * mag);
      }
      atom.deltaX += dDeltaX;
      atom.deltaY += dDeltaY;
   };

   function cheatToHome(atom){
      //cheat hack to force atoms to move back towards the original grid positions if they move too far
      var dX, dY, mag;
      dX = atom.x - atom.oX;
      dY = atom.y - atom.oY;
      mag = Math.pow(dist(dX, dY)/100, 4);
      atom.deltaX -= dX;
      atom.deltaY -= dY;
   }

   function findNeighbors(){
      var tempDist;
      var tempX, tempY;
      var modGridSize = gridSize * 1.1;
      var tempNeighbors = [];
      for(var rep=0;rep<aGrid.length;rep++){
         tempX = aGrid[rep].x;
         tempY = aGrid[rep].y;
         for(var rep2=0;rep2<aGrid.length;rep2++){
            tempDist = dist(tempX - aGrid[rep2].x, tempY - aGrid[rep2].y);
            if(tempDist != 0 && tempDist < modGridSize){
               //not itself and within a GridSize radius of itself
               tempNeighbors.push(aGrid[rep2]);
            }
         }
         aGrid[rep].neighbors = tempNeighbors;
         tempNeighbors = [];
      }
   };

   function drawAtom(atom){
      if(atom.isFixed == false){
            calcThermal(atom);
            calcNeighborForce(atom);
            cheatToHome(atom);
            atom.x += atom.deltaX;
            atom.y += atom.deltaY;
         };
      _Ctx.drawImage(lCanvas, atom.x, atom.y, lWidth, lHeight);
   }

   namespace.about = "Simulation of lattice vibrations";
   namespace.initBgVars = function(iCanvas, iCtx){
      _Canvas = iCanvas;
      _Ctx = iCtx;
      aGrid = [];
      gridSize = 50;
      kT = 0.1;
      radius = gridSize / 3;

      //setup offscreen canvas
      lCanvas.width = (2 * radius) + 2;
      lWidth = lCanvas.width;
      lCanvas.height = (2 * radius) + 2;
      lHeight = lCanvas.height;
      //draw circle to copy
      lCtx.arc(lCanvas.width/2, lCanvas.width/2, radius, 0, Math.PI*2, false);
      lCtx.fillStyle = "#222";
      lCtx.fill();

      var xGrid = _Canvas.width / gridSize;
      xGrid += 4;
      rowHeight = (1/Math.tan(Math.PI/6))/2*gridSize;
      var yGrid = _Canvas.height / rowHeight;
      yGrid += 4;

      var tempX, tempY;
      for(var rep=0;rep<yGrid;rep++){
         for(var rep2=0;rep2<xGrid;rep2++){
            tempX = (-2*gridSize) + (0.5*gridSize*(rep%2)) + (rep2*gridSize);
            tempY = rowHeight*rep - (2*rowHeight);
            aGrid.push({
               x: tempX,
               y: tempY,
               oX: tempX,
               oY: tempY,
               deltaX: 0,
               deltaY: 0,
               isFixed: ((tempX> -gridSize)&&(tempY> -rowHeight)&&(tempX<_Canvas.width)&&(tempY<_Canvas.height)) ? false : true,
               isRepulsor: false,
               neighbors: []
            });
         }
      }
      findNeighbors();
   };

   namespace.userInput = function(iX, iY){
   };

   namespace.updateBgCanvas = function(){
      //console.time('updateBgCanvas');
      myCtx.fillStyle = "rgb(100,0,0)";
      myCtx.fillRect(0, 0, myCanvas.width, myCanvas.height);
      for(var rep=0;rep<aGrid.length;rep++){
         //console.time('drawMe');
         drawAtom(aGrid[rep]);
         //console.timeEnd('drawMe');
      }
      //console.time('fill');
      //console.timeEnd('fill');
      //console.timeEnd('updateBgCanvas');
   };
})(bgVars.lattice = bgVars.lattice || {});



bgVars.selectBG = function(selector){
   if(selector == 0){
      bgVars.about = bgVars.GoL.about;
      bgVars.initBgVars = bgVars.GoL.initBgVars;
      bgVars.userInput = bgVars.GoL.userInput;
      bgVars.updateBgCanvas = bgVars.GoL.updateBgCanvas;
      $("#bgInfo").html(bgVars.about);
   }
   if(selector == 1){
      bgVars.about = bgVars.lattice.about;
      bgVars.initBgVars = bgVars.lattice.initBgVars;
      bgVars.userInput = bgVars.lattice.userInput;
      bgVars.updateBgCanvas = bgVars.lattice.updateBgCanvas;
      $("#bgInfo").html(bgVars.about);
   }
};