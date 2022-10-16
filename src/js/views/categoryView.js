import View from './View.js';
import {state} from "../model.js"

class CategoryView extends View {
  _parentElement = document.querySelector('.side-nav');
  _errorMessage = 'We could not find that element. Please try another one!';
  _message = '';


  addHandlerChangeCategory(handler){
    this._parentElement.addEventListener("click",handler)
  }



}

export default new CategoryView();
