import * as types from '../constants/ActionTypes';

export const setData = arrayData => ({type: types.SET_DATA, arrayData});
export const clearData = () => ({type: types.CLEAR_DATA});