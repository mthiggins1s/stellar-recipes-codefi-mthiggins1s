document.addEventListener("DOMContentLoaded", () => {
    const recipesGrid = document.querySelector(".js-recipes-grid");

    if (!recipesGrid) return;

    // Generate and insert recipes
    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        recipeCard.innerHTML = `
            <img class="recipe-image" src="${recipe.image}" alt="${recipe.title}">
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-description">${recipe.description}</p>
            <button class="view-recipe-button" data-id="${recipe.id}">View Recipe</button>
        `;

        recipesGrid.appendChild(recipeCard);
    });

    // Event listener for recipe buttons
    recipesGrid.addEventListener("click", (event) => {
        if (event.target.classList.contains("view-recipe-button")) {
            const recipeId = event.target.dataset.id;
            alert(`You clicked on recipe ID: ${recipeId}`);
            // Navigate or load recipe details dynamically
        }
    });
});