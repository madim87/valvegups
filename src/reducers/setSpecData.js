import {SET_DATA} from "../constants/ActionTypes";

const initialState =
        {
            inmingap   : 0.12,
            inmaxgap   : 0.15,
            exmingap   : 0.21,
            exmaxgap   : 0.25,
            colorLegend: false
        }
;

export default function setSpecData (state = initialState, action) {
    switch (action.type) {
        case SET_DATA:{
            return Object.assign({}, state, {[action.typegap]: action.value});
        }
        default:
            return state;

    }
}