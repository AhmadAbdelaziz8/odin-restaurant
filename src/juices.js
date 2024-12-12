export default function generateJuices() {
  // add juices-page title
  const juicesPageTitle = document.createElement("h2");
  juicesPageTitle.textContent = "JUICES Menu";
  //   add container of items
  const itemsContainer = document.createElement("div");
  // generate list of items
  for (let i = 0; i < 4; i++) {
    // create items with prices beside it
    const juiceItem = document.createElement("p");
    const juiceItemPrice = document.createElement("p");
    const juiceItemContainer = document.createElement("div");
    // add to the DOM tree
    juiceItemContainer.appendChild(juiceItem, juiceItemPrice);
    itemsContainer.appendChild(juiceItemContainer);
  }
  return [juicesPageTitle, itemsContainer];
}
