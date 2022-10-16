import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export let state = {
  userCategories: [],
  recommendedProducts: [],
  selectedCategoryID: 0,
};

const restructureData = function (data) {
  const userCategories = data[0][0].params.userCategories;
  const recommendedProducts = Object.values(
    data[0][0].params.recommendedProducts
  ).slice(0, -2);

  const newState = {
    userCategories: userCategories,
    recommendedProducts: recommendedProducts,
  };

  return newState;
};

export const loadData = async function () {
  try {
    const data = await getJSON(`${API_URL}`);
    const structuredData = restructureData(data);

    state = { ...state, ...structuredData };
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const changeSelectedCategory = function (categoryID) {
  state = { ...state, selectedCategoryID: categoryID };
};

export const changeActiveClass = function (categoryID) {
  const activeElement = document.querySelector(".side-nav__item--active");
  activeElement.classList.remove("side-nav__item--active");

  const newActiveElement = document.getElementById(categoryID)
  newActiveElement.classList.add("side-nav__item--active")

};
