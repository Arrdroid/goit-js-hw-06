const groupList = document.getElementById("categories");

const groupItems = groupList.querySelectorAll("li.item");

console.log("Number of categories:", groupItems.length);


groupItems.forEach((item) => {
  const textInEl = item.querySelector("h2").textContent;

  const allTheElements = item.querySelectorAll("li");
  
  console.log(`Category: ${textInEl}`);
  console.log("Number of Elements: ", allTheElements.length);
});

