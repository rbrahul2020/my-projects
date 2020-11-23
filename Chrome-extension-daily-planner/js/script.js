let actionClass =new Action(); 
let form=document.getElementById("addActionForm");

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let input=document.getElementsByClassName("task")[0];
  val=input.value;
  console.log(val);
  actionClass.add(val);
  input.value="";
});

let quickActions=document.getElementsByClassName("quickAction");
for(let i=0;i<3;i++){
  quickActions[i].addEventListener("click",
  (e)=>{
     if(i!=1) {actionClass.add(e.target.innerHTML);}
     else{actionClass.getCurrentTab();}
  });
}

let greetingName=document.getElementsByClassName("greeting-name")[0]; 
let gNN=document.getElementsByClassName("greeting-name-name")[0];
greetingName.addEventListener("click",()=>{
  console.log("event");
  greetingNameInput=document.getElementsByClassName("greeting-name-input")[0];
 
  greetingNameInput.value=gNN.innerHTML;
  $('#modal').modal('show');

});

let saveButton=document.getElementsByClassName("save-button")[0];
saveButton.addEventListener("click",function(){
  greetingNameInput=document.getElementsByClassName("greeting-name-input")[0];
  name=greetingNameInput.value;
  chrome.storage.sync.set({greetingName:name},()=>{
  setGreetingName();
  });
  $('#modal').modal('hide');
});

let setGreeting=()=>{
  let greetingType=document.getElementsByClassName("greeting-type")[0];
  let greetingImage=document.getElementsByClassName("greeting-image")[0];
  console.log(greetingImage.src);
  let date= new Date();
  let hours= date.getHours();
  if(hours>=5 && hours<=11){
    greetingType.innerHTML="Good Morning";
      greetingImage.src="chrome-extension://okpchdaolfkacnkgllfgcajffmdodjkh/images/good-morning.png";
  }
  else if(hours>11 && hours<=16){
    greetingType.innerHTML="Good Afternoon";
      greetingImage.src="chrome-extension://okpchdaolfkacnkgllfgcajffmdodjkh/images/good-afternoon.png";
  }
  else if(hours>16 && hours<=20){
    greetingType.innerHTML="Good Evening";
      greetingImage.src="chrome-extension://okpchdaolfkacnkgllfgcajffmdodjkh/images/good-evening.png";
  }
  else{
    greetingType.innerHTML="Good Night";
      greetingImage.src="chrome-extension://okpchdaolfkacnkgllfgcajffmdodjkh/images/good-night.png";
  }
}

let setGreetingName=()=>{console.log("setGreetingName");
   chrome.storage.sync.get(['greetingName'],
            (data)=>{
                    let name=data.greetingName;
                    console.log(name);
                    if(!name){name=gNN.innerHTML;
                      chrome.storage.sync.set({greetingName:name},()=>{
                    chrome.storage.sync.get(['greetingName'],(data)=>{
                    console.log(data);});
                                                                    })}
                    else{gNN.innerHTML=name;}
                  
                    }
                          );
                      }

let restore=()=>{
  setGreetingName();
  setGreeting();  
  actionClass.modifyData();
  actionClass.render();
}

restore();