import * as types from '../constants/ActionTypes';

export const setData = (typegap, value) => ({type: types.SET_DATA, typegap, value});
export const addCylinder = () => ({type: types.ADD_CYLINDER});
export const setCylinderData  = (id, typedata, value) => ({type: types.SET_CYLINDER_DATA, id, typedata, value});
export const clearData = () => ({type: types.CLEAR_DATA});