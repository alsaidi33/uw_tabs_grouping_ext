const numberElement = document.getElementById("number");
const incrementButton = document.getElementById("increment-button");

incrementButton.addEventListener("click", () => {
  // chrome.runtime.sendMessage({ action: "incrementNumber" });
});

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action == "updateNumber") {
//     numberElement.textContent = request.number;
//   }
// });