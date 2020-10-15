let grid=document.getElementsByClassName("grid")[0];
//let spaceInvader=[1,2,3,4,5,6,7,8,9,10,21,22,23,24,25,26,27,28,29,30,41,42,43,44,45,46,47,48,49,50];
let squares=[];
let width=20;
let count=0;
let blockPositions=[];
for(i=0;i<400;i++){
    let square=document.createElement("div");
    square.classList.add("square");
    //square.classList.add("square");
    //if(spaceInvader.includes(i)){    square.classList.add("invader");}

squares.push(square);
grid.appendChild(square);
}
let frogIndex=390;
let target=30;
squares[frogIndex].classList.add("frog");
squares[target].classList.add("target");


function moveFrog(e){
    squares[frogIndex].classList.remove('frog');  
   
   switch(e.keyCode) {
       case 40:
       console.log('pressed down')
        if(frogIndex<380)
           {frogIndex+= width;}
       break
       case 38:
       console.log('pressed up')
        if(frogIndex>=20)
           {frogIndex -= width;}
       break
       case 37: 
       console.log('pressed left')
       if(frogIndex%20!==0)
          {frogIndex -=1;}
         /*  if (pacmanCurrentIndex === 364) {
               pacmanCurrentIndex = 391
           }*/
       break
       case 39:
       console.log('pressed right')
       if(frogIndex%20!==19)
           {frogIndex+=1;}
          /* if (pacmanCurrentIndex === 391) {
               pacmanCurrentIndex = 364
           }*/
       break
   }
   if(frogIndex===target){
       alert("you won");
   }
   squares[frogIndex].classList.add('frog');
   //squares[pacmanCurrentIndex].classList.remove('pacman');
  
  // squares[pacmanCurrentIndex].classList.remove('pac-dot');
   //squares[pacmanCurrentIndex].classList.remove('power')
   }
   
   
   document.addEventListener('keyup',moveFrog);
let rightMove=['l2','l1','l3','l2','l1','l3','l2','l1','l3','l2','l1','l3','l2','l1','l3','l2','l1','l3','l2','l1'];
for(let i=0;i<20;i++){
    squares[i+320].classList.add(rightMove[i]);
}

let rightMoveRef=setInterval(function(){
    for(let i=0;i<20;i++){
        if(squares[i+320].classList.contains('l1')){
            squares[i+320].classList.remove('l1');
            squares[i+320].classList.add('l2');
}
else if(squares[i+320].classList.contains('l2')){
    squares[i+320].classList.remove('l2');
    squares[i+320].classList.add('l3');
}
else if(squares[i+320].classList.contains('l3')){
    squares[i+320].classList.remove('l3');
    squares[i+320].classList.add('l1');
}
if(squares[i+320].classList.contains('frog')){
    if(squares[i+320].classList.contains('l1'))
    {
        alert("game over");
}
  //  squares[i+240].classList.remove('frog');
  //  frogIndex++;
  //  squares[i+241].classList.add('frog');
}  
    }
},500);

let leftMove=['l1','l2','l3','l1','l2','l3','l1','l2','l3','l1','l2','l3','l1','l2','l3','l1','l2','l3','l1','l2'];
for(let i=0;i<20;i++){
    squares[i+300].classList.add(leftMove[i]);
}

let leftMoveRef=setInterval(function(){
    for(let i=0;i<20;i++){
        if(squares[i+300].classList.contains('l1')){
            squares[i+300].classList.remove('l1');
            squares[i+300].classList.add('l2');
}
else if(squares[i+300].classList.contains('l2')){
    squares[i+300].classList.remove('l2');
    squares[i+300].classList.add('l3');
}
else if(squares[i+300].classList.contains('l3')){
    squares[i+300].classList.remove('l3');
    squares[i+300].classList.add('l1');
}
if(squares[i+300].classList.contains('frog')){
    if(squares[i+300].classList.contains('l1'))
    {
        alert("game over");
}
  //  squares[i+240].classList.remove('frog');
  //  frogIndex++;
  //  squares[i+241].classList.add('frog');
}  
    }
},500);


let rightMove2=['n5','n4','n3','n2','n1','n5','n4','n3','n2','n1','n5','n4','n3','n2','n1',
'n5','n4','n3','n2','n1'];
for(let i=19;i>=0;i--){
    squares[i+240].classList.add(rightMove2[i]);
}

let rightMoveRef2=setInterval(function(){
    for(let i=19;i>=0;i--){
        if(squares[i+240].classList.contains('n1')){
            squares[i+240].classList.remove('n1');
            squares[i+240].classList.add('n2');
        
}
else if(squares[i+240].classList.contains('n2')){
    squares[i+240].classList.remove('n2');
    squares[i+240].classList.add('n3');
}
else if(squares[i+240].classList.contains('n3')){
    squares[i+240].classList.remove('n3');
    squares[i+240].classList.add('n4');
}
else if(squares[i+240].classList.contains('n4')){
    squares[i+240].classList.remove('n4');
    squares[i+240].classList.add('n5');
}
else if(squares[i+240].classList.contains('n5')){
    squares[i+240].classList.remove('n5');
    squares[i+240].classList.add('n1');
}
if(squares[i+240].classList.contains('frog')){
    if(squares[i+240].classList.contains('n1') || squares[i+240].classList.contains('n5'))
    {
        alert("game over");

    }
    squares[i+240].classList.remove('frog');
    frogIndex++;
    squares[i+241].classList.add('frog');
}   
    }
},500);   



let leftMove2=['n1','n2','n3','n4','n5','n1','n2','n3','n4','n5','n1','n2','n3','n4','n5',
'n1','n2','n3','n4','n5'];
for(let i=0;i<20;i++){
    squares[i+220].classList.add(leftMove2[i]);
}

let leftMoveRef2=setInterval(function(){
    for(let i=0;i<20;i++){
        if(squares[i+220].classList.contains('n1')){
            squares[i+220].classList.remove('n1');
            squares[i+220].classList.add('n2');
}
else if(squares[i+220].classList.contains('n2')){
    squares[i+220].classList.remove('n2');
    squares[i+220].classList.add('n3');
}
else if(squares[i+220].classList.contains('n3')){
    squares[i+220].classList.remove('n3');
    squares[i+220].classList.add('n4');
}
else if(squares[i+220].classList.contains('n4')){
    squares[i+220].classList.remove('n4');
    squares[i+220].classList.add('n5');
}
else if(squares[i+220].classList.contains('n5')){
    squares[i+220].classList.remove('n5');
    squares[i+220].classList.add('n1');
}
if(squares[i+220].classList.contains('frog')){
    squares[i+220].classList.remove('frog');
    if(squares[i+220].classList.contains('n1') || squares[i+220].classList.contains('n5'))
    {
        alert("game over");

    }
    frogIndex--;
    squares[i+219].classList.add('frog');
}  
    }
},500);   

