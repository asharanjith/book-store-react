const categories = [];
const CHECK_STATUS = 'categories/categories /CHECK_STATUS';

export const checksStatus = (category) => ({
  type: CHECK_STATUS,
  payload: category,
});

const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categoriesReducer;
