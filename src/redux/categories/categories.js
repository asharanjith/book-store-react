const categories = [];
const CHECK_CATEGORY = 'categories/categories /CHECK_CATEGORY';

export const checkCategory = (category) => ({
  type: CHECK_CATEGORY,
  payload: category,
});

const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_CATEGORY:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default categoriesReducer;
