import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'
//Action Creators
export const getVehicles = () => async (dispatch) => {
    try {
      const { data } = await api.fetchVehicles();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };


export const createVehicle=(vehicle)=> async (dispatch)=>{
    try {
        const {data}=await api.createVehicle(vehicle)
        dispatch({type:CREATE,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateVehicle = (id, vehicle) => async (dispatch) => {
  try {
    const { data } = await api.updateVehicle(id, vehicle);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteVehicle = (id) => async (dispatch) => {
  try {
    await api.deleteVehicle(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};