export default function generateVegs() {
  // add vegs-page title
  const vegsPageTitle = document.createElement("h2");
  vegsPageTitle.textContent = "VEGS Menu";
  //   add container of items
  const itemsContainer = document.createElement("div");
  // generate list of items
  for (let i = 0; i < 4; i++) {
    // create items with prices beside it
    const vegsItem = document.createElement("p");
    const vegsItemPrice = document.createElement("p");
    const vegsItemContainer = document.createElement("div");
    // add to the DOM tree
    vegsItemContainer.appendChild(vegsItem, vegsItemPrice);
    itemsContainer.appendChild(vegsItemContainer);
  }
  return [vegsPageTitle, itemsContainer];
}
