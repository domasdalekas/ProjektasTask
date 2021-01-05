import Order from '../Models/Order'
const initialState = {
    FinishedOrders: []
};
export const FinishedOrderReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'SHOW_ALL_FINISHED_ORDERS' :
            return {
                FinishedOrders:action.payload.FinishedOrders
            }
        default:
            return state;
    }
 }