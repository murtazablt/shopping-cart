//import icons from '../../img/icons.svg'; // Parcel 2

export default class View {
  _data;

  render(data, activeCategory, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    this._activeCategoryID = activeCategory;

    activeCategory = parseInt(this._activeCategoryID, 10); // convert string to number

    const activeCategoryProducts = this._data[activeCategory];

    const markup = this._generateMarkup(activeCategoryProducts);

    if (!render) return markup;

    this._clear();

    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  // renderSpinner() {
  //   const markup = `
  //     <div class="spinner">
  //       <svg>
  //         <use href="${icons}#icon-loader"></use>
  //       </svg>
  //     </div>
  //   `;
  //   this._clear();
  //   this._parentElement.insertAdjacentHTML('afterbegin', markup);
  // }

  // renderError(message = this._errorMessage) {
  //   const markup = `
  //     <div class="error">
  //       <div>
  //         <svg>
  //           <use href="${icons}#icon-alert-triangle"></use>
  //         </svg>
  //       </div>
  //       <p>${message}</p>
  //     </div>
  //   `;
  //   this._clear();
  //   this._parentElement.insertAdjacentHTML('afterbegin', markup);
  // }

  // renderMessage(message = this._message) {
  //   const markup = `
  //     <div class="message">
  //       <div>
  //         <svg>
  //           <use href="${icons}#icon-smile"></use>
  //         </svg>
  //       </div>
  //       <p>${message}</p>
  //     </div>
  //   `;
  //   this._clear();
  //   this._parentElement.insertAdjacentHTML('afterbegin', markup);
  // }
}
