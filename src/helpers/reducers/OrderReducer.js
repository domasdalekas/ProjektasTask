import FinishedOrders from '../FinishedOrders';
import Order from '../Models/Order'
const initialState = {
    Orders: [],
};

export const OrderReducer = (state = initialState, action) =>{
    switch (action.type){
    case 'SHOW_ALL_ORDERS' :
        return {
            Orders:action.payload.Orders
        }
        
        case 'DELETE':
            const itemsIndex = state.Orders.findIndex(
              (Order) => Order.id === action.payload,
            );
            return {
              Orders: [
                ...state.Orders.slice(0, itemsIndex),
                ...state.Orders.slice(itemsIndex + 1),
              ],
            };
    default:
            return state;
 }
}
