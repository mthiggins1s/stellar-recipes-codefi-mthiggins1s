function renderRecipes(listRecipes) {
    const recipesHTML = listRecipes
      .map((recipes) => `
        <div class="recipes-container">
          <div class="recipes-image-container">
            <img class="recipes-image" src="${recipes.image}" alt="${recipes.title}">
          </div>
          <div class="recipes-details">
            <div class="recipes-title limit-text-to-2-lines">
              ${recipes.title}
            </div>
            <div class="recipes-genre">
              ${recipes.genre.join(", ")}
            </div>
            <div class="recipes-rating">
              Rating: ${recipes.rating.toFixed(1)} / 5
            </div>
            <div class="recipes-year">
              Released: ${recipes.year}
            </div>
          </div>
          <button class="add-to-favorites-button button-primary js-add-to-favorites" 
          data-recipes-id="${recipes.id}">
            Add to Favorites
          </button>
        </div>
      `)
      .join("");
      const recipesGrid = document.querySelector('.js-recipes-grid');
  recipesGrid.innerHTML = recipesHTML;
}