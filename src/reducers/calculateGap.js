import {ADD_CYLINDER, SET_CYLINDER_DATA} from "../constants/ActionTypes";

const initialState =
    [

        {
            id    : 1,
            igap  : 0.15,
            egap  : 0.25,
            ishim : 280,
            eshim : 280,
        }
    ]
;



export default function calculateGap (state = initialState, action) {
    switch (action.type) {
        case ADD_CYLINDER:
            return [
                ...state,
                {
                    id    : state.length + 1,
                    igap  : 0,
                    egap  : 0,
                    ishim : 0,
                    eshim : 0,
                }
            ];
        case SET_CYLINDER_DATA:
            return state.map(cylinder => cylinder.id === action.id ? {...cylinder,[action.typedata]:action.value} : cylinder);
        default:
            return state;
    }
}