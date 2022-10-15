import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import productsView from './views/productsView.js';
import userCategoriesView from './views/userCategoriesView.js';


const controlProducts = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 2) Loading products
    await model.loadProducts(id);

    // 3) Rendering products
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlUserCategories = async function (){
    try {
        const id = window.location.hash.slice(1);
    
        // if (!id) return;
        // recipeView.renderSpinner();
    
        // 2) Loading products
        await model.loadProducts(id);
    
        // 3) Rendering products
        recipeView.render(model.state.recipe);
      } catch (err) {
        recipeView.renderError();
        console.error(err);
      }
}


const init = function () {
  productsView.addHandlerRender(controlProducts);
  userCategoriesView.addHandlerRender(controlUserCategories)
};
// init();
