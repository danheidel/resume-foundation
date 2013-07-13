(function selectBG(){
   var selector = Math.floor(Math.random() * 2);
   if(selector == 0){
      //set up vars for game of life
      window.bgVars = {
         "about": "The background is the famous Conway Game of Life",
         "_Canvas": {},
         "_Ctx": {},
         "xBlockSize": 3,
         "yBlockSize": 3,
         "xBlocks": 0,
         "yBlocks": 0,
         "bornVals": [3],
         "stayAliveVals": [2, 3],
         "cGrid": [],
         "cGrid2": [],
         "initBgVars" : function(iCanvas, iCtx){
            var seedVals = [3, 5, 7, 11, 13, 17, 19, 23, 27, 31];
            this._Canvas = iCanvas;
            this._Ctx = iCtx;
            this.xBlocks = Math.round(myCanvas.width/this.xBlockSize) + 1;
            this.yBlocks = Math.round(myCanvas.height/this.yBlockSize) + 1;
            this.cGrid = new Uint8Array(this.xBlocks * this.yBlocks);
            for(var rep=0;rep<(this.xBlocks * this.yBlocks);rep++){
               this.cGrid[rep] = rep%seedVals[rep%10]%2;
            }
            this.cGrid2 = new Uint8Array(this.xBlocks * this.yBlocks);
         },
         "cirInd": function(index, mod){
            //returns modulus, array-wrapping value to implement circular array
            if(index<0){index+=mod;}
            return index%mod;
         },
         "calcNeighbors": function(rep){
            var foo = this.xBlocks;
            var grid = this.cGrid;
            var mod = grid.length;
            var cirInd = this.cirInd;
            var neighbors = grid[cirInd(rep-foo-1, mod)] + grid[cirInd(rep-foo, mod)] + grid[cirInd(rep-foo+1, mod)] + grid[cirInd(rep-1, mod)] + grid[cirInd(rep+1, mod)] + grid[cirInd(rep+foo-1, mod)] + grid[cirInd(rep+foo, mod)] + grid[cirInd(rep+foo+1, mod)];
            return neighbors;
         },
         "lifeRules": function(rep, neighbors){
               this.cGrid2[rep] = 0;
               if(this.cGrid[rep] == 1){  //stay alive rules
                  for(var rep2=0;rep2<this.stayAliveVals.length;rep2++){
                     if(neighbors==this.stayAliveVals[rep2]){this.cGrid2[rep] = 1;}
                  }
               }
               if(this.cGrid[rep] == 0){  //'born' rules
                  for(var rep2=0;rep2<this.bornVals.length;rep2++){
                     if(neighbors==this.bornVals[rep2]){this.cGrid2[rep] = 1;}
                  }
               }          
         },
         "fastFillLive": function(){
            var xPix = myCanvas.width;
            var yPix = myCanvas.height;
            var xB = this.xBlocks;
            var xBS = this.xBlockSize;
            var yB = this.yBlocks;
            var yBS = this.yBlockSize;
            var _Ctx = this._Ctx
            var gArray = _Ctx.imageData.data;
            var gArray32 = new Uint32Array(gArray.buffer);
            var cGrid = this.cGrid;

            var live8 = new Uint8Array(4);
            var live32 = new Uint32Array(live8.buffer);
            live8[0] = 140;
            live8[3] = 255;

            var dead8 = new Uint8Array(4);
            var dead32 = new Uint32Array(dead8.buffer);
            dead8[0] = 100;
            dead8[3] = 255;

            var row32 = new Uint32Array(xPix);
            var rowLen = row32.length;

            for(var yBr=0;yBr<yB;yBr++){
               for(var xBr=0;xBr<xB;xBr++){
                  for(var xBSr=0;xBSr<xBS;xBSr++){
                     if(cGrid[xBr + (yBr * xB)] == 0){
                        row32[xBSr + (xBr*xBS)] = dead32[0];
                     }
                     else{
                        row32[xBSr + (xBr*xBS)] = live32[0];
                     }
                  }
               }
               for(var yBSr=0;yBSr<yBS;yBSr++){
                  if((yBSr + (yBr * yBS)) < yPix){
                     gArray32.set(row32, rowLen * (yBSr + (yBr * yBS)));
                  }
               }               
            }

            _Ctx.putImageData(_Ctx.imageData, 0, 0);
         },
         "updateBgCanvas": function(){
            //fill live squares
            this.fastFillLive();
            var neighbors = 0;
            //calculate next generation to buffer
            for(var rep=0;rep<this.cGrid.length;rep++){
               //add up the live squares in the 8 neighbor blocks
               neighbors = this.calcNeighbors(rep);
               //implement GoL ruleset
               this.lifeRules(rep, neighbors);
            }
            //seed with random noise to keep dynamic and copy to display buffer
            for(var rep=0;rep<this.cGrid.length;rep++){
               if(Math.random()<0.0002){this.cGrid2[rep] = 1;}
            }
            this.cGrid.set(this.cGrid2);
         }
      }
   }
   if(selector == 1){
      //set up vars for game of life
      window.bgVars = {
         "about": "The background is the famous Conway Game of Life",
         "_Canvas": {},
         "_Ctx": {},
         "boid": {
            x:0,
            y:0,
            
         },
         "initBgVars" : function(iCanvas, iCtx){

         },
         "updateBgCanvas": function(){
         }
      }      
   }
})();