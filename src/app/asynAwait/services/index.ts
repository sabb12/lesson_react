export function fetchCocktailList() {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  )
    .then((response) => response.json())
    .then(function (data) {
      return data.drinks.slice(0, 30);
    });
}

export function fetchTodaysquote() {
  return fetch("https://api.quotable.io/quotes/random")
    .then((response) => response.json())
    .then(function (data) {
      return data[0];
    });
}
