import axios from 'axios';

// URL for deploy to heroku
const url = 'https://stark-bastion-40593.herokuapp.com/vehicles';

// URL for dev env
// const url = 'http://localhost:5000/vehicles';

export const fetchVehicles = () => axios.get(url);

export const createVehicle = (newVehicle) => axios.post(url, newVehicle);

export const updateVehicle = (id, updatedVehicle) => axios.patch(`${url}/${id}`, updatedVehicle);

export const deleteVehicle = (id) => axios.delete(`${url}/${id}`);