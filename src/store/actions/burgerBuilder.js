import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
  return {
    ingredientName: name,
    type: actionTypes.ADD_INGREDIENTS,
  };
};
export const removeIngredient = (name) => {
  return {
    ingredientName: name,
    type: actionTypes.REMOVE_INGREDIENTS,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients,
  };
};

export const setIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => (dispatch) => {
  axios
    .get('/ingredients.json')
    .then((res) => {
      dispatch(setIngredients(res.data));
    })
    .catch((err) => {
      dispatch(setIngredientsFailed());
    });
};
