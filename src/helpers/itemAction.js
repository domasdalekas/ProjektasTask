import gasTank from './Models/GT'
import Order from './Models/Order'

export const deleteTank = (id) => {
    console.log(id)
    return async (dispatch) => {
      const response = await fetch(
        `https://domlet-17cc6-default-rtdb.firebaseio.com/gasTanks/${id}.json`,
        {
          method: 'DELETE',
        },
      );
      if (!response.ok) {
        throw new Error('Something wrong');
      }
      dispatch({type: 'DELETE', payload: id});
    };
  };
export const showAll = () => {
    return async (dispatch) => {
      const response = await fetch(
        'https://domlet-17cc6-default-rtdb.firebaseio.com/gasTanks.json',
      );
      if (!response.ok) {
        throw new Error('Something wrong');
      }
      const resData = await response.json();
      const fetchItemsList = [];
      for (const i in resData) {
        fetchItemsList.push(
          new gasTank(i, resData[i].gasname, resData[i].availability),
        );
      }
     dispatch({
        type: 'SHOW_ALL',
        payload: {
          gasTanks: fetchItemsList
        },
      });

    };
  }
  export const addGas = (gasname,availability) => {
    return async (dispatch) => {
      const response = await fetch(
        'https://domlet-17cc6-default-rtdb.firebaseio.com/gasTanks.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            gasname,
            availability 
          }),
        },
      );
      if (!response.ok) {
        throw new Error('Something wrong');
      }
      const resData = await response.json();
     dispatch({
        type: 'ADD_GAS',
        payload: {
          id: resData.name,
          gasname: gasname,
          availability:availability
        },
      });
    };
  }
  export const editGasTank = (gasname,availability,id) => {
    return async (dispatch) => {
      const response = await fetch(
        `https://domlet-17cc6-default-rtdb.firebaseio.com/gasTanks/${id}.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            gasname,
            availability,
          }),
        },
      );
      if (!response.ok) {
        throw new Error('Something wrong');
      }
      dispatch({
        type: 'UPDATE',
        payload: {
          id: id,
         gasname: gasname,
          availability:availability,
        },
      });
    };
  };
  export const showAllOrders = () => {
    return async (dispatch) => {
      const response = await fetch(
        'https://domlet-17cc6-default-rtdb.firebaseio.com/Orders.json',
      );
      if (!response.ok) {
        throw new Error('Something wrong');
      }
      const resData1 = await response.json();
      const fetchItemsList1 = [];
      for (const i in resData1) {
        fetchItemsList1.push(
          new Order(i, resData1[i].gasname,resData1[i].gastype,resData1[i].litre,resData1[i].price,resData1[i].progress),
        );
      }
     dispatch({
        type: 'SHOW_ALL_ORDERS',
        payload: {
          Orders: fetchItemsList1
        },
      });

    };
  }
  export const FinishOrder = (gasname,gastype,litre,price,progress) => {
    return async (dispatch) => {
      const response = await fetch(
        'https://domlet-17cc6-default-rtdb.firebaseio.com/FinishedOrders.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            gasname,
            gastype,
            litre,
            price,
            progress
          }),
        },
      );
      if (!response.ok) {
        throw new Error('Something wrong');
      }
      const resData = await response.json();
      const fetchItemsList = [];
      for (const i in resData) {
        fetchItemsList.push(
          new Order(i, resData[i].gasname,resData[i].gastype,resData[i].litre,resData[i].price,resData[i].progress),
        );
      }
    };
  }
  export const deleteOrder= (id) => {
    console.log(id)
    return async (dispatch) => {
      const response = await fetch(
        `https://domlet-17cc6-default-rtdb.firebaseio.com/Orders/${id}.json`,
        {
          method: 'DELETE',
        },
      );
      if (!response.ok) {
        throw new Error('Something wrong');
      }
      dispatch({type: 'DELETE', payload: id});
    };
  };
  export const showAllFinishedOrders = () => {
    return async (dispatch) => {
      const response = await fetch(
        'https://domlet-17cc6-default-rtdb.firebaseio.com/FinishedOrders.json',
      );
      if (!response.ok) {
        throw new Error('Something wrong');
      }
      const resData1 = await response.json();
      const fetchItemsList1 = [];
      for (const i in resData1) {
        fetchItemsList1.push(
          new Order(i, resData1[i].gasname,resData1[i].gastype,resData1[i].litre,resData1[i].price,resData1[i].progress),
        );
      }
     dispatch({
        type: 'SHOW_ALL_FINISHED_ORDERS',
        payload: {
          FinishedOrders: fetchItemsList1
        },
      });

    };
  }