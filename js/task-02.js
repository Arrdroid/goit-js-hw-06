const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const parentUl = document.getElementById("ingredients");

const improvedArray = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");

  listItem.textContent = ingredient;

  listItem.classList.add("item");

  return listItem;
});


parentUl.append(...improvedArray);
