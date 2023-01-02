// let number = 0;

// function incrementNumber() {
//   number++;
//   chrome.storage.sync.set({ number: number });
//   chrome.runtime.sendMessage({ action: "updateNumber", number: number });
// }

// chrome.storage.sync.get(["number"], result => {
//   number = result.number || 0;
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action == "incrementNumber") {
//     incrementNumber();
//   }
// });