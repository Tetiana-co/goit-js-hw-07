// Порахуємо категорії
const items = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${ulCategoriesList.length}`);

// Для кожної категорії виведемо назву та кількість елементів
ulCategoriesList.forEach(ulCategoriesItem => {
  console.log(`Category: ${ulCategoriesItem.childNodes[1].textContent}`);
  console.log(`Elements: ${ulCategoriesItem.childNodes[3].children.length}`);
});
