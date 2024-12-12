export default function generateMeat() {
  // add meat-page title
  const meatPageTitle = document.createElement("h2");
  meatPageTitle.textContent = "MEAT Menu";
  //   add container of items
  const itemsContainer = document.createElement("div");
  // generate list of items
  for (let i = 0; i < 4; i++) {
    // create items with prices beside it
    const meatItem = document.createElement("p");
    const meatItemPrice = document.createElement("p");
    const meatItemContainer = document.createElement("div");
    // add to the DOM tree
    meatItemContainer.appendChild(meatItem, meatItemPrice);
    itemsContainer.appendChild(meatItemContainer);
  }
  return [meatPageTitle, itemsContainer];
}
