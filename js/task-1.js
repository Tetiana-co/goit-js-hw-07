// Знаходимо всі категорії (li.item) усередині ul#categories
const categoryItems = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoryItems.length}`);

// Для кожної категорії дістаємо <h2> і всі <li> всередині вкладеного <ul>
categoryItems.forEach(categoryItem => {
  const titleEl = categoryItem.querySelector('h2');
  const elementsCount = categoryItem.querySelectorAll('ul > li').length;

  console.log(`Category: ${titleEl.textContent.trim()}`);
  console.log(`Elements: ${elementsCount}`);
});
