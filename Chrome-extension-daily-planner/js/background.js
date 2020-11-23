chrome.contextMenus.create(
    {
        "id":"linkSiteMenu",
        "title":"read site later",
        "contexts":["all"]
    }
);
let actionClass =new Action2(); 
chrome.contextMenus.onClicked.addListener(()=>{

      actionClass.getCurrentTab();
      
    
});
