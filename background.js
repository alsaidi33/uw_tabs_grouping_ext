chrome.runtime.onMessage.addListener(async (msg, sender, res) => {
  if(msg == 'getTabs') {
    var tabs = await chrome.tabs.query({});
    chrome.runtime.sendMessage({
      msg: "tabs", 
      data: tabs
    });
    
    
    Promise.all(tabs.map(t => fetch(`https://myapi?ulr=${t.url}`))).then(responses =>
      Promise.all(responses.map(response => response.json()))
    ).then(data =>{
         // sort by grope title
         
         for(var d of data) {

         }
    }).catch(err =>
      console.log(err)
    );

    var groupId = await chrome.tabs.group({ tabIds: [tabs[0].id, tabs[1].id] });
    chrome.tabGroups.update(groupId, { collapsed: false, title: "title", color: "blue" });
  }

  if(msg == "testGroup"){
    const data = [
      {url: 'https://google.com', group:'Search Engine'},
      {url: 'https://facebook.com', group:'Social Media'},
      {url: 'https://twitter.com', group:'Social Media'},
      {url: 'https://youtube.com', group:'Video'},
      {url: 'https://amazon.com', group:'Shopping'},
      {url: 'https://ebay.com', group:'Shopping'},
      {url: 'https://wikipedia.org', group:'Reference'},
      {url: 'https://stackoverflow.com', group:'Reference'},
      {url: 'https://github.com', group:'Reference'},
    ];
    
    const groupedByGroup = data.reduce((result, item) => {
      (result[item.group] = result[item.group] || []).push(item);
      return result;
    }, {});
    
    console.log(groupedByGroup);

    for(const group in groupedByGroup){
      console.log(group);
      console.log(groupedByGroup[group]);
    }

  }
});

