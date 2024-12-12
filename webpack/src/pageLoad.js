export default function loadPage() {
  const content = document.getElementById("content");

  // Create and add elements
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to My Restaurant!";

  const paragraph = document.createElement("p");
  paragraph.textContent = "This is some description about the restaurant.";

  content.appendChild(heading);
  content.appendChild(paragraph);
}
