import View from './View.js';
import {state} from "../model.js"

class ProductsView extends View {
  _parentElement = document.querySelector('.products__cards');
  _activeCategoryID = document.querySelector('.side-nav__item--active').id
  _errorMessage = 'We could not find that element. Please try another one!';
  _message = '';

  addHandlerRender(handler) {
    ['load'].forEach(ev => window.addEventListener(ev, handler));
  }

  _generateMarkup(products) {
    // products = [{productId: .., name: ..},{..},{..}]

    let emptyDiv = document.createElement("div")
    const freeShipping = `<div class="products__card-shipping">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                              d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z"
                            />
                            <path
                              d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z"
                            />
                            <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                          </svg>

                          <span>Ücretsiz Kargo</span>
                        </div>`

    products.forEach(product => {
      const newContent = `
                <div class="products__card swiper-slide">
                  <div class="products__card-img-container">
                    <div class="lazyloading">
                      <div class="swiper-wrapper">
                        <!-- Lazy image -->
                        <div class="swiper-slide lazy-load-img">
                          <img
                            src=${product.image}
                            class="swiper-lazy products__card-img"
                          />
                          <div class="swiper-lazy-preloader"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="products__card-description">
                    ${product.name}  
                  </p>
                  <span class="products__card-price">${product.priceText}</span>
                  ${product.params.shippingFee == "FREE" && freeShipping }
                </div>
      `
      emptyDiv.insertAdjacentHTML("beforeend",newContent)

    });

    const childrenNode = emptyDiv.children
    const markup = emptyDiv.innerHTML
    
    return `${markup}` ;
  }

}

export default new ProductsView();
