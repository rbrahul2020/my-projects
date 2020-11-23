
class Action2{

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
                    let n=data.actionItems.length;
                    let i;let c=0;
                    for(i=0;i<n;i++){
                        if(data.actionItems[i].completed==true){c++;}
                    }
                    c=n-c;
                
                    chrome.browserAction.setBadgeText({'text':c.toString()},function(){
                          console.log(text+1);
                     });
                    //this.renderActionItems(data);
                    console.log(data);});
                                                                    })
                    }
                          );
   
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

}