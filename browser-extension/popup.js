const getTabs = () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve(tabs);
    });
  });
};

const getInactiveTab = async () => {
  const tabs = await getTabs();
  return tabs.filter((tab) => !tab.active).pop();
};

const switchTab = (tabId) => {
  return new Promise((resolve, reject) => {
    chrome.tabs.update(tabId, { active: true }, (tab) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve(tab);
    });
  });
};

const changeToInactiveTab = async () => {
  const inactiveTab = await getInactiveTab();
  (await inactiveTab)
    ? switchTab(inactiveTab.id)
    : console.log("No inactive tabs found.");
};

document
  .getElementById("changeColor")
  .addEventListener("click", async function () {
    const colorName = document.getElementById("colorName").value;
    const colorSquare = document.getElementById("colorSquare");
    colorSquare.style.backgroundColor = colorName;

    const tabs = await getTabs();
    console.log(JSON.stringify(tabs, null, 2));

    let colorNameDisplay = document.getElementById("colorNameDisplay");
    if (!colorNameDisplay) {
      colorNameDisplay = document.createElement("p");
      colorNameDisplay.id = "colorNameDisplay";
      colorNameDisplay.className = "color-name-display";
      document.querySelector(".container").appendChild(colorNameDisplay);
    }

    colorNameDisplay.innerHTML = `Color Name: ${colorName}`;
  });

document.addEventListener("DOMContentLoaded", async function () {
  const tabs = await getTabs();
  console.log(JSON.stringify(tabs, null, 2));
});
