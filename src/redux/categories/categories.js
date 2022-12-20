const categories = [];
const CHECK_STATUS = 'categories/categories/CHECK_STATUS';

export const checksStatus = () => (dispatch) => {
  dispatch({ type: CHECK_STATUS, payload: 'Under Construction' });
};

const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [action.payload];
    default:
      return state;
  }
};

export default categoriesReducer;
