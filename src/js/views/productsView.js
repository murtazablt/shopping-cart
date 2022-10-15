import View from './View.js';
import {state} from "../model.js"

class ProductsView extends View {
  _parentElement = document.querySelector('.products');
  _activeCategory = document.querySelector('.side-nav__item--active')
  _errorMessage = 'We could not find that element. Please try another one!';
  _message = '';

  _checkCategories(){
     state.userCategories.filter()
  }

  _generateMarkup() {
    return `
      
    `;
  }

}

export default new RecipeView();
