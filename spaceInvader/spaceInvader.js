let grid=document.getElementsByClassName("grid")[0];
let spaceInvader=[1,2,3,4,5,6,7,8,9,10,21,22,23,24,25,26,27,28,29,30,41,42,43,44,45,46,47,48,49,50];
let squares=[];
let width=20;
let count=0;
let blockPositions=[];
for(i=0;i<400;i++){
    let square=document.createElement("div");
    square.classList.add("square");
    //square.classList.add("square");
    if(spaceInvader.includes(i)){    square.classList.add("invader");

}
squares.push(square);
grid.appendChild(square);
}

let direction=1;
let invaderRef= setInterval(function(){
  let left=(spaceInvader[0]%20===0);
  let right=((spaceInvader[spaceInvader.length-1]%20)===19);
  console.log(left,right);
  if((left && direction===-1) || (right && direction===1)){
      direction=width;
  }
let n=spaceInvader.length;
console.log(n);
for(let i=0;i<n;i++){
    squares[spaceInvader[i]].classList.remove("invader");
 //   spaceInvader[i]+=width;
   // squares[spaceInvader[i]].classList.add("invader");
}
for(let i=0;i<n;i++){
    //squares[spaceInvader[i]].classList.remove("invader");
    spaceInvader[i]+=direction;
   if(blockPositions.indexOf(i)===-1) 
  { // spaceInvader[i]+=direction;
    squares[spaceInvader[i]].classList.add("invader");
if(spaceInvader[i]>=380){alert("YOU LOSS");
    clearInterval(playerAttackRef);
            clearInterval(invaderRef);
    alert("YOU LOSS");

}
}
}
if(left) direction=1;
else if(right) direction=-1;


},100);

let playerCurrentPosition =395;
squares[playerCurrentPosition].classList.add("player");

document.addEventListener("keyup",function(e){
if(e.keyCode==37){
    squares[playerCurrentPosition].classList.remove("player");
    if(playerCurrentPosition%20!==0){
        playerCurrentPosition-=1;
       
    }
    squares[playerCurrentPosition].classList.add("player");

}
else if(e.keyCode==39){
    squares[playerCurrentPosition].classList.remove("player");
    if(playerCurrentPosition%20!==19){
        playerCurrentPosition+=1;
       
    }
    squares[playerCurrentPosition].classList.add("player");
}

});

document.addEventListener("click",function(){
    let bombCurrentPosition=playerCurrentPosition-width;
    squares[bombCurrentPosition].classList.add("bomb");
    let bombRef=setInterval(function(){
        squares[bombCurrentPosition].classList.remove("bomb");
        bombCurrentPosition-=width;
        if(bombCurrentPosition<0){
            clearInterval(bombRef);
        }

        else if(squares[bombCurrentPosition].classList.contains("invader")){
            blockPositions.push(spaceInvader.indexOf(bombCurrentPosition));
            clearInterval(bombRef);squares[bombCurrentPosition].classList.remove("invader");
            count++;
            if(count===30){clearInterval(playerAttackRef);
            clearInterval(invaderRef);
        alert("YOU WON");
        }
         }

        else squares[bombCurrentPosition].classList.add("bomb");
    },100);
})
/*let playerAttackRef=setInterval(function(){
    let bombCurrentPosition=playerCurrentPosition-width;
    squares[bombCurrentPosition].classList.add("bomb");
    let bombRef=setInterval(function(){
        squares[bombCurrentPosition].classList.remove("bomb");
        bombCurrentPosition-=width;
        if(bombCurrentPosition<0){
            clearInterval(bombRef);
        }

        else if(squares[bombCurrentPosition].classList.contains("invader")){
            blockPositions.push(spaceInvader.indexOf(bombCurrentPosition));
            clearInterval(bombRef);squares[bombCurrentPosition].classList.remove("invader");
            count++;
            if(count===30){clearInterval(playerAttackRef);
            clearInterval(invaderRef);
        alert("YOU WON");
        }
         }

        else squares[bombCurrentPosition].classList.add("bomb");
    },100);
},
300);*/