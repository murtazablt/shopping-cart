import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export let state = {
  userCategories: [],
  recommendedProducts: [],
};

const restructureData = function (data) {
  const userCategories = data[0][0].params.userCategories
  const recommendedProducts = Object.values(data[0][0].params.recommendedProducts).slice(0,-2)

  console.log(userCategories)
  const newState = {
    userCategories,
    recommendedProducts 
  }

  return newState;
};

export const loadData = async function (id) {
  try {
    const data = await getJSON(`${API_URL}`);
    const structuredData = restructureData(data)

    state = structuredData

  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

loadData();
