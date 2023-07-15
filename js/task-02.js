const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const parentUl = document.getElementById("ingredients");

ingredients.forEach((element) => {
  const listItem = document.createElement("li");

  listItem.textContent = element;

  listItem.classList.add("item");

  parentUl.appendChild(listItem);
});

