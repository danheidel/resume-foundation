(function createBGVars(){
   window.bgVars = {};
})();

//set up vars for game of life
bgVars.GoL = (function(){
   var _Canvas = {};
   var _Ctx = {};
   var xBlockSize = 3;
   var yBlockSize = 3;
   var xBlocks = 0;
   var yBlocks = 0;
   var bornVals = [3];
   var stayAliveVals = [2, 3];
   var cGrid = [];
   var cGrid2 = [];

   cirInd = function(index, mod){
      //returns modulus, array-wrapping value to implement circular array
      if(index<0){index+=mod;}
      return index%mod;
   };

   calcNeighbors = function(rep){
      var foo = xBlocks;
      var grid = cGrid;
      var mod = grid.length;
      var neighbors = grid[cirInd(rep-foo-1, mod)] + grid[cirInd(rep-foo, mod)] + grid[cirInd(rep-foo+1, mod)] + grid[cirInd(rep-1, mod)] + grid[cirInd(rep+1, mod)] + grid[cirInd(rep+foo-1, mod)] + grid[cirInd(rep+foo, mod)] + grid[cirInd(rep+foo+1, mod)];
      return neighbors;
   };

   lifeRules = function(rep, neighbors){
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

   fastFillLive = function(){
      //console.time("init");
      var xPix = myCanvas.width;
      var yPix = myCanvas.height;
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
      var clampXBlocks = Math.floor(xPix/xBlockSize);

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

   return {
      "about": "This is the famous Conway Game of Life",
      "initBgVars" : function(iCanvas, iCtx){
         var seedVals = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 39, 43, 47];
         _Canvas = iCanvas;
         _Ctx = iCtx;
         xBlocks = Math.round(myCanvas.width/xBlockSize) + 1;
         yBlocks = Math.round(myCanvas.height/yBlockSize) + 1;
         cGrid = new Uint8Array(xBlocks * yBlocks);
         for(var rep=0;rep<(xBlocks * yBlocks);rep++){
            cGrid[rep] = rep%seedVals[rep%(seedVals.length)]%2;
         }
         cGrid2 = new Uint8Array(xBlocks * yBlocks);
      },
      "userInput": function(iX, iY){
         console.log(iX);
         console.log(iY);
         var gridX = Math.round(iX / xBlockSize);
         var gridY = Math.round(iY / yBlockSize);
         cGrid[gridX + (gridY * xBlocks)] = 1;
      },
      "updateBgCanvas": function(){
         //fill live squares
         fastFillLive();
         var neighbors = 0;
         var cLength = cGrid.length;
         //calculate next generation to buffer
         //console.time('calcs');
         for(var rep=0;rep<cLength;rep++){
            //add up the live squares in the 8 neighbor blocks
            neighbors = calcNeighbors(rep);
            //implement GoL ruleset
            lifeRules(rep, neighbors);
         }
         //console.timeEnd('calcs');
         //seed with random noise to keep dynamic and copy to display buffer
         for(var rep=0;rep<cLength;rep++){
            if(Math.random()<0.0002){cGrid2[rep] = 1;}
         }
         cGrid.set(cGrid2);
      },
   };
})();

bgVars.lattice = (function(){
   var about = "Simulation of lattice vibrations";
   var _Canvas = {};
   var _Ctx = {};

   return {
      "initBgVars" : function(iCanvas, iCtx){
         _Canvas = iCanvas;
         _Ctx = iCtx;
      },
      "userInput": function(iX, iY){
      },
      "updateBgCanvas": function(){
      },
   };
})();

bgVars.selectBG = (function(){
   var selector = Math.floor(Math.random() * 1);

   _selectBackground = function(){
      if(selector == 0){
         bgVars.about = bgVars.GoL.about;
         bgVars.initBgVars = bgVars.GoL.initBgVars;
         bgVars.userInput = bgVars.GoL.userInput;
         bgVars.updateBgCanvas = bgVars.GoL.updateBgCanvas;
      }
      if(selector == 1){

      }
   };

   _selectBackground();

   return {
      "selectBackground" : function(){
         _selectBackground();
      },
   }
})();