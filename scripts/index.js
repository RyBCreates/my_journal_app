const journalSaveButton = document.querySelector(".journal__save-button");
const entryInput = document.querySelector(".journal__text-entry");
const entriesContainer = document.querySelector(".history__entries-container");

journalSaveButton.addEventListener("click", () => {
  const entryText = entryInput.value;

  if (entryText.trim() !== "") {
    const newEntry = document.createElement("p");
    newEntry.classList.add("history__entry");
    newEntry.textContent = entryText;
    entriesContainer.appendChild(newEntry);

    entryInput.value = "";
  }
});
