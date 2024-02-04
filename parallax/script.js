document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  let clickCounter = 0;

  noButton.addEventListener("click", function () {
    // Increase the size of the yes button
    let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = currentSize + 2 + "px";

    // Change the text of the no button
    if (clickCounter === 0) {
      noButton.innerText = "Why no?";
    } else if (clickCounter === 1) {
      noButton.innerText = "Come on, that's not fair!";
    } else if (clickCounter === 2) {
      noButton.innerText = "You have to click yes now.";
    } else if (clickCounter === 3) {
      noButton.innerText = "Don't, don't, don't!";
    } else {
      noButton.innerText = "No more clicks allowed";
      noButton.disabled = true; // Disable the button after a certain number of clicks
    }

    clickCounter++;
  });
});
