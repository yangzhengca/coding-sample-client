import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

const vehicleReducer = (vehicles = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...vehicles, action.payload];
    case UPDATE:
      return vehicles.map((vehicle) =>
        vehicle._id === action.payload._id ? action.payload : vehicle
      );
    case DELETE:
      return vehicles.filter((vehicle) => vehicle._id !== action.payload);
    default:
      return vehicles;
  }
};

export default vehicleReducer;
