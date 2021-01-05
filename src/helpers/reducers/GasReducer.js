import gasTank from '../Models/GT'
const initialState = {
    gasTanks: []
};

export const gasReducer = (state = initialState, action) =>{
    switch (action.type){
        
        case 'SHOW_ALL':
            return {
            gasTanks: action.payload.gasTanks
        }
       
        case 'ADD_GAS':
        const newItem = new gasTank(
            action.payload.id,
            action.payload.gasname,
            action.payload.availability,
          );
          return {
          gasTanks: state.gasTanks.concat(newItem),
          };
          case 'DELETE':
            const itemsIndex = state.gasTanks.findIndex(
              (gasTank) => gasTank.id === action.payload,
              
            );
            return {
              gasTanks: [
                ...state.gasTanks.slice(0, itemsIndex),
                ...state.gasTanks.slice(itemsIndex + 1),
              ],
            };
            case 'UPDATE':
      const updateIndexItem = state.gasTanks.findIndex(
        (gasTank) => gasTank.id === action.payload.id,
      );
      console.log('Index item:' + updateIndexItem);
      const updateItem = new gasTank(
        action.payload.id,
        action.payload.gasname,
        action.payload.availability,
      );
      const updatedItems = [...state.gasTanks];
      updatedItems[updateIndexItem] = updateItem;
      return {
        ...state,
        gasTanks: updatedItems,
      };
        case 'RESET_ITEM_LIST':
            return {gasTanks: []};
        default:
            return state;
    }
}