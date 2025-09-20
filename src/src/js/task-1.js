const ul = document.querySelector("#categories");
console.log("Number of categories: ", ul.children.length);

[...ul.children].map((li) => {
  console.log("Category: ", li.firstElementChild.textContent);
  console.log("Elements: ", li.lastElementChild.children.length);
});
