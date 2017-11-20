export const GET_CURRENT_USER = 'GET_CURRENT_USER';

export const UPDATE_MONEY = 'UPDATE_MONEY';

export const getCurrentUser = () => ({type: GET_CURRENT_USER})

export const updateMoney = (amount) => ({type: UPDATE_MONEY, payload: amount})