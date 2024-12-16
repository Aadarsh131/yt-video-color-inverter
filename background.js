let isInverted = false;

chrome.action.onClicked.addListener((tab) => {
  isInverted = !isInverted;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: toggleInversion,
    args: [isInverted]
  });
});

function toggleInversion(isInverted) {
  const player = document.querySelector(".html5-video-player");
  if (player) {
    if (isInverted) {
      player.style.setProperty("filter", "invert(1) hue-rotate(180deg)", "important");
    } else {
      player.style.removeProperty("filter");
    }
  } else {
    console.warn("No video player found on the page.");
  }
}

