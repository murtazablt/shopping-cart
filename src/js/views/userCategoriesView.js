import View from './View.js';
import {state} from "../model.js"

class UserCategoriesView extends View {
  _parentElement = document.querySelector('.side-nav');
  _activeCategory = document.querySelector('.side-nav__item--active')
  _errorMessage = 'We could not find that element. Please try another one!';
  _message = '';

    

  _generateMarkup(category) {
    return `
        <li class="side-nav__item side-nav__item--active">
            <a href="#" class="side-nav__link">
            <span>${category}</span>
            </a>
        </li>
    `;
  }

}

export default new UserCategoriesView();
