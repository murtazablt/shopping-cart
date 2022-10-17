import * as model from "./model.js";
import categoryView from "./views/categoryView.js";

import productsView from "./views/productsView.js";

const controlProducts = async function () {
  try {
    // 1) Loading products
    await model.loadData();

    // 2) Find out selected category
    const activeCategory = model.state.selectedCategoryID;

    // 3) Rendering products
    productsView.render(model.state.recommendedProducts, activeCategory);
  } catch (err) {
    // Temp err handler
    console.error(err);
  }
};

const controlCategories = async function (e) {
  try {
    //Check Products
    if (model.state.recommendedProducts == []) await model.loadData();

    //Get categoryID
    const categoryID = e.target.id;

    //Change Selected Category
    model.changeSelectedCategory(categoryID);
    model.changeActiveClass(categoryID);

    //Render new produts
    const activeCategoryID = model.state.selectedCategoryID;

    productsView.render(model.state.recommendedProducts, activeCategoryID);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  productsView.addHandlerRender(controlProducts);
  categoryView.addHandlerChangeCategory(controlCategories);
};
init();
