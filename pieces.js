

function LPiece(){
this.state1= [[1,0],
              [1,0],
              [1,1]];
this.state2=[ [0,0,1],
              [1,1,1]];
this.state3=[ [1,1],
              [0,1],
              [0,1]];
this.state4=[ [1,1,1],
            [1,0,0]];
            
this.states=[ this.state1, this.state2, this.state3, this.state4 ];
this.curState=0;
this.color=0;
this.gridx=-4;
this.gridy=-3;
}
              
function ReverseLPiece(){
  this.state1= [ [0,1],   
               [0,1],            
               [1,1]];
 this.state2=[ [1,1,1],             
               [0,0,1]];
 this.state3=[ [1,1],              
               [1,0],              
               [1,0]];
 this.state4=[ [1,0,0],         
                [1,1,1]];            
 this.states=[ this.state1, this.state2, this.state3, this.state4 ];
  this.curState=0;
  this.color=0;
  this.gridx=-4;
  this.gridy=-3;
}
  function BlockPeice(){
    this.state1=[ [1,1]
                 [1,1]];
    this.states=[ this.state1 ];
    this.curState=0;
    this.color=0;
    this.gridx=4;
    this.gridy= -2;
  }
  
  function LinePiece(){
    this.state1=[ [1],
                 [1],
                 [1],
                 [1] ];
    this.state2= [ [1,1,1,1]];
    this.states= [ this.state1, this.state2 ];
    this.curState=0;
    this.color=0;
    this.gridx=5;
    this.gridy= -4;
  }
  
  function TPiece(){
    this.state1= [ [1,1,1],
                  [0,1,0]];
    this.state2= [ [1,0],
                  [1,1],
                  [1,0] ];
    this.state3= [ [0,1,0]
                  [1,1,1] ];
    this.state4= [ [0,1],
                  [1,1]
                  [0,1] ];
    this.states= [ this.state1, this.state2, this.state3, this.state4 ];
    this.curState=0;
    this.gridx=4
    this.gridy= -2;
  }
  
  function ZPiece(){
    this.state1= [ [1,1,0]
                  [0,1,1] ];
    this.state2= [ [0,1],
                  [1,1],
                  [1,0] ];
    this.state= [this.state1, this.state2];
    this.curState=0;
    this.gridx=4;
    this.gridy= -2;
  }
  
  function getRandomPiece(){
    var result= Math.floor(Math.random() * 7)
    var piece;
    switch (result)
    {
      case 0: piece = newLPiece(); break;
      case 1: piece= newBlockPiece(); break;
      case 2: piece = newZPiece(); break;
      case 3: piece = newTPiece(); break; 
      case 4: piece = RevereseLPiece(); break;
      case 5: piece= ReverseZPiece(); break;
      case 6: piece= ReverseLinePiece(); break;
    }
    piece.color=Math.floor(Math.random() * 8);
    return piece;
  }
    
