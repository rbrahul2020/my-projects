let T=0,C=0;
let Bar=new barClass(); 
var bar=Bar.makeBar(); 
class Action{
    animate(x){
        bar.animate(x);
    } 
    
    animateUp(element){console.log("animate up");
       let height = element.innerHeight();
       element.animate({
            opacity: '0',
            marginTop: `-${height}px`}
       ,  250);
       
    }

    animateDown(element, duration){
        let height = element.innerHeight();
        element.css({ marginTop: `-${height}px`, opacity: 0 }).animate({
        opacity: '1',
        marginTop: `12px`}
           , {
        duration: duration
        });
    }

   renderActionItem(x){
    let actionItems=document.getElementsByClassName("actionItems")[0];
    let element= document.createElement("div");
    element.classList.add("actionItem__item");
    if(x.completed){element.classList.add("completed");}
    element.setAttribute('data-id',x.id);
    let mainElement= document.createElement("div");
    mainElement.classList.add("actionItem__main");
    let checkEl= document.createElement("div");
    checkEl.classList.add("actionItem__check");
    if(x.completed){checkEl.classList.add("completed__check");}
    checkEl.addEventListener("click",(e)=>{
    console.log(e.path[0].classList);
    if(e.path[0].classList[0]=="fas"){if((e.path[4]).classList.contains("completed")){(e.path[4]).classList.remove("completed");} 
    else{(e.path[4]).classList.add("completed");}
    if((e.path[2]).classList.contains("completed__check")){(e.path[2]).classList.remove("completed__check");}
    else{(e.path[2]).classList.add("completed__check");}
    this.markUnmark(x.id);}
   
    });

    let textEl= document.createElement("div");
    textEl.classList.add("actionItem__text");
    let deleteEl= document.createElement("div");
    deleteEl.classList.add("actionItem__delete");
   

    textEl.innerHTML=x.text;
    deleteEl.innerHTML=`<i class="fas fa-times" aria-hidden="true"></i>`;
    deleteEl.addEventListener("click",(e)=>{
       // e.path[3].style.display="none";
        let jjElement = $(`div[data-id="${x.id}"]`);
        console.log(x.id);
        this.animateUp(jjElement);
        this.remove(x.id);
    });
    checkEl.innerHTML=`<div class="actionItem__checkBox">
                          <i class="fas fa-check" aria-hidden="true"></i>
                    </div>`;
    mainElement.appendChild(checkEl);  
    mainElement.appendChild(textEl);
    mainElement.appendChild(deleteEl);
    element.appendChild(mainElement);
     if(x.website){
        let link =document.createElement("div");
        link.classList.add("actionItem__linkContainer");
        link.innerHTML=`<a href="${x.website.url}">
        <img src="${x.website.fav_icon}" alt="svg">
        <div>${x.website.title}</div>
        </a>`
        element.appendChild(link);
    }
    actionItems.prepend(element);  
    let jElement = $(`div[data-id="${x.id}"]`);
    
    this.animateDown(jElement, 500);
   }

   add(text,website=null){
   let actionItem={
       id:uuidv4(),
       added:new Date().toString(),
       text:text,
       completed:null,
       completedData: null,
       website:website,

   }
   chrome.storage.sync.get(['actionItems'],
            (data)=>{
                    let items=data.actionItems;
                    if(!items){items=[actionItem];}
                    else{items.push(actionItem);}
                    chrome.storage.sync.set({actionItems:items},()=>{
                    chrome.storage.sync.get(['actionItems'],(data)=>{

                    this.renderActionItems(data);
                    console.log(data);});
                                                                    })
                    }
                          );
   }
   render(){
        chrome.storage.sync.get(['actionItems'],(data)=>{
                    this.renderActionItems(data);
                    console.log(data);});
   }

   renderActionItems(data){
      let actionItems=document.getElementsByClassName("actionItems")[0];
      actionItems.innerHTML="";
      let i=0;let t=0;let c=0,n=data.actionItems.length;
      for(i=0;i<n;i++){ 
           t++;
              this.renderActionItem(data.actionItems[i]);
           if(data.actionItems[i].completed){c++;}
      }
      T=t;C=c;
      this.setProgress(C,T);
      this.setText();
   }

   clearChrome(){
      chrome.storage.sync.clear();
   }

    markUnmark(id){
      chrome.storage.sync.get(['actionItems'],(data)=>{
      let items=data.actionItems;
      let foundItemIndex=items.findIndex((item)=>item.id==id);
      if(foundItemIndex>=0){
          if(items[foundItemIndex].completed){items[foundItemIndex].completed=false;
                                              items[foundItemIndex].completedDate=null;
                                              C--;
                                             }
          else{items[foundItemIndex].completed=true;
            items[foundItemIndex].completedDate=(new Date()).getDate();
            C++;}
          console.log(items[foundItemIndex]);  
          this.setProgress(C,T);
          this.setText();
          chrome.storage.sync.set({
                                  actionItems:items
                                  });
      }
      });
    }

    setProgress(C,T){
        console.log(C,T);
     if(T) {bar.animate(C/T);}
     else bar.animate(0);
    }
    
    remove(id){
         chrome.storage.sync.get(['actionItems'],
            (data)=>{
                    let items=data.actionItems;
                    let findItem=items.find((item)=> item.id==id);
                    console.log(findItem);
                    T--;if(findItem.completed){C--;}
                    this.setProgress(C,T);
                    this.setText();
                    let newItems=items.filter((item)=> item.id!=id);
                    chrome.storage.sync.set({actionItems:newItems},()=>{
                                                                    });
                    });
    }

    getCurrentTab=()=>{
     chrome.tabs.query({'active':true,'windowId':chrome.windows.WINDOW_ID_CURRENT},(tabs)=>{
         console.log(tabs);
         let website = {
                       url: tabs[0].url,
                       fav_icon: tabs[0].favIconUrl,
                       title: tabs[0].title
                       }
         this.add("read this site",website);
    });
    }
    
    setText=()=>{
        chrome.browserAction.setBadgeText({text:(T-C).toString()},function(){});
    }

    modifyData=()=>{
        chrome.storage.sync.get(['actionItems'],
            (data)=>{
                    let items=data.actionItems;
                    let newItems=items.filter((item)=> (item.completed!=true || (item.completedDate==((new Date()).getDate()))));
                    chrome.storage.sync.set({actionItems:newItems},()=>{
                                                                    });
                    });
    }
}