let container=document.getElementById("container");
let sky=document.getElementById("sky");
let ground=document.getElementById("ground");
let bird=document.getElementById("bird");
let birdBottom=400;
let birdLeft=200;
let jump=50;
let gameOver=false;
function gameStart(){
     
   
   let birdRef=setInterval(function(){   let g=1;
    birdBottom-=g;
    if(birdBottom<0){clearInterval(birdRef);}
    bird.style.bottom=birdBottom+"px";},10);
}

gameStart();

function jumpBird(){
if(birdBottom<=470) birdBottom+=jump;
bird.style.bottom=birdBottom+"px";
}

document.addEventListener("click",jumpBird);


function obstacle(){
    //let obsLeft=600;
    //let obsBottom=200;
 //   let obs=document.createElement('div');
   // obs.style.left=600+"px";
   // obs.style.bottom=200+"px";
   // obs.classList.add("obstacle");
    //container.appendChild(obs);

    
    //let obsRef= setInterval(function(){
      //  obsLeft-=obsSpeed;
    //    obs.style.left=obsLeft+"px";},15);
    let createObs=setInterval(function(){
        let obsSpeed=2;
        let obsLeft=1300;
        let obsBottom=100*Math.random();
        let obs=document.createElement('div');
        obs.style.left=obsLeft+"px";
        obs.style.bottom=obsBottom+"px";
       if(!gameOver){ obs.classList.add("obstacle");
        container.appendChild(obs);
        let obsRef= setInterval(function(){let obsSpeed=2;
            if(gameOver) clearInterval(obsRef);
            obsLeft-=obsSpeed;
            obs.style.left=obsLeft+"px";
           
        if((obsBottom-200)<=birdBottom && (obsBottom+50)>=birdBottom && birdLeft<=(obsLeft+60) &&
        birdLeft>=(obsLeft)) {gameOver=true;clearInterval(obsRef);}
        },15);}
       else{
           clearInterval(createObs);
       //    clearInterval(obsRef);
       }     

    },3000);    
}


obstacle();


function UpObstacle(){
    //let obsLeft=600;
    //let obsBottom=200;
 //   let obs=document.createElement('div');
   // obs.style.left=600+"px";
   // obs.style.bottom=200+"px";
   // obs.classList.add("obstacle");
    //container.appendChild(obs);

    
    //let obsRef= setInterval(function(){let obsSpeed=2;
      //  obsLeft-=obsSpeed;
    //    obs.style.left=obsLeft+"px";},15);
    let createUpObs=setInterval(function(){
        let obsSpeed=2;
        let obsUpLeft=1300;
        let obsTop=(200*Math.random()+450);
        let obsUp=document.createElement('div');
        obsUp.style.left=obsUpLeft+"px";
        obsUp.style.bottom=(obsTop)+"px";
       if(!gameOver){ obsUp.classList.add("Upobstacle");
        container.appendChild(obsUp);
        let obsUpRef= setInterval(function(){let obsUpSpeed=2;
            if(gameOver) clearInterval(obsUpRef);
            obsUpLeft-=obsSpeed;
            obsUp.style.left=obsUpLeft+"px";
           
       if((obsTop-200)<=birdBottom && (obsTop+50)>=birdBottom && birdLeft<=(obsUpLeft+60) &&
        birdLeft>=(obsUpLeft)) {gameOver=true;clearInterval(obsUpRef);}
        },15);}
       else{
           clearInterval(createUpObs);
       //    clearInterval(obsRef);
       }     

    },3000);    
}

UpObstacle();
