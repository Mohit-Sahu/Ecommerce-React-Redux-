import { ActionTypes } from '../constants/actionType';

const initialState ={
    products:[],
}
export const productReducer = (state = initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECT_PRODUCT:
            return {...state,payload};
             default:
            return {...state,payload};
    }

};