
  document.getElementById('btn').addEventListener('click', async () => {    
   chrome.runtime.sendMessage('getTabs');
  });


  document.getElementById('testGroup').addEventListener('click', async () => {    
    chrome.runtime.sendMessage('testGroup');
   });

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      if (request.msg === "tabs") {
          alert(request.data[0].url);
      }
  }
);