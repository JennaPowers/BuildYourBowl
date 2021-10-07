import axios from 'axios';

// User selects bowl to build
export const selectBowl = (bowl) => {
    return {
        type: 'SELECT_BOWL',
        payload: bowl
    };
};


// User selects a topping
export const selectTopping = (topping) => {
    return {
        type: `SELECT_TOPPING_${topping.name}`,
        payload: topping
    } ;
};

// // Get food item id
// export const getId = (item) => async (dispatch) => {
//     const optionsId = {
//         method: 'GET',
//         url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete',
//         params: { query: item.name, number: '1', metaInformation: 'true'},
//         headers: {
//           'x-rapidapi-key': '771d66a746msh5979663fdc0d33ep106c34jsn235cc524a0bd',
//           'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//         }
//       };
      
//       const response = await axios.request(optionsId).then(function (response) {
//         const optionsNutrition = {
//             method: 'GET',
//             url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/${response.data[0].id}/information`,
//             params: { amount: '100', unit: 'g' },
//             headers: {
//               'x-rapidapi-key': '771d66a746msh5979663fdc0d33ep106c34jsn235cc524a0bd',
//               'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//             }
//           };
//           const response2 = axios.request(optionsNutrition).then(function (response2) {
//             dispatch({ type: 'NUTRITION', payload: response2.data})
//         }).catch(function (error) {
//             console.error(error);
//         });


//     }).catch(function (error) {
//         console.error(error);
//     });
// };


// User selects topping to get food item id
export const getFoodId = (item) => async (dispatch) => {
    const optionsId = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete',
        params: { query: item.name, number: '1', metaInformation: 'true'},
        headers: {
          'x-rapidapi-key': '771d66a746msh5979663fdc0d33ep106c34jsn235cc524a0bd',
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };
      const response = await axios.request(optionsId).then(function (response) {
        dispatch({ type: 'ID', payload: response.data[0].id })
    }).catch(function (error) {
        console.error(error);
    });
}

// User changes amount and units of nutrition info selector 
export const changeServingSize = (formProps) => async (dispatch, getState) => {
    const id = getState().id;
    console.log(id);
    const optionsNutrition = {
        method: 'GET',
        url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/${id}/information`,
        params: { amount: formProps.amount, unit: formProps.unit },
        headers: {
          'x-rapidapi-key': '771d66a746msh5979663fdc0d33ep106c34jsn235cc524a0bd',
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };
      const response = axios.request(optionsNutrition).then(function (response) {
        dispatch({ type: 'NUTRITION', payload: response.data})
    }).catch(function (error) {
        console.error(error);
    });
}

// User adds topping to bowl
export const addToBowl = (item) => {
    return {
        type: 'ADD_TO_BOWL',
        payload: item
    };
};

// Make toppings empty upon navigation
export const deleteBowlToppings = () => {
    return {
        type: 'DELETE_BOWL_TOPPINGS'
    };
};

