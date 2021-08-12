import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import {
  TextField,
  Button,
  Typography,
  Paper,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { createVehicle, updateVehicle } from "../../actions/vehicles";

const Form = ({ currentId, setCurrentId }) => {
  const [vehicleData, setVehicleData] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    // isSold: "",
  });

  const vehicle = useSelector((state) =>
    currentId ? state.vehicles.find((p) => p._id === currentId) : null
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (vehicle) setVehicleData(vehicle);
  }, [vehicle]);

  const clear = () => {
    setCurrentId(null);
    setVehicleData({
      make: "",
      model: "",
      year: "",
      price: "",
      // isSold: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateVehicle(currentId, vehicleData));
      clear();
    } else {
      dispatch(createVehicle(vehicleData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a vehicle
        </Typography>
        <TextField
          name="make"
          variant="outlined"
          label="Make"
          fullWidth="true"
          value={vehicleData.make}
          onChange={(e) =>
            setVehicleData({ ...vehicleData, make: e.target.value })
          }
        />
        <TextField
          name="model"
          variant="outlined"
          label="Model"
          fullWidth="true"
          value={vehicleData.model}
          onChange={(e) =>
            setVehicleData({ ...vehicleData, model: e.target.value })
          }
        />
        <TextField
          name="year"
          variant="outlined"
          label="year"
          fullWidth="true"
          value={vehicleData.year}
          onChange={(e) =>
            setVehicleData({ ...vehicleData, year: e.target.value })
          }
        />
        <TextField
          name="price"
          variant="outlined"
          label="Price"
          fullWidth="true"
          value={vehicleData.price}
          onChange={(e) =>
            setVehicleData({ ...vehicleData, price: e.target.value })
          }
        />

        {/* input true or false to change status */}
        {/* <TextField
          name="isSold"
          variant="outlined"
          label="IsSold"
          fullWidth="true"
          value={vehicleData.isSold}
          onChange={(e) =>
            setVehicleData({ ...vehicleData, isSold: e.target.value })
          }
        /> */}

        {/* use radio group to change status
        <FormLabel component="Status">Status</FormLabel>
        <RadioGroup
          aria-label="Status"
          name="isSold"
          value={vehicleData.isSold}
          onChange={(e) =>
            setVehicleData({ ...vehicleData, isSold: e.target.value })
          }
        >
          <FormControlLabel value="false" control={<Radio />} label="Live" />
          <FormControlLabel value="true" control={<Radio />} label="Sold" />
        </RadioGroup> */}

        {currentId && (<Button
          className={classes.buttonChange}
          variant="contained"
          // color="primary"
          size="large"
          type="submit"
          fullWidth="true"
          onClick={() =>
          setVehicleData({ ...vehicleData, isSold:true })}
          spacing={2}
        >
          Mark As Sold
        </Button>) }

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth="true"
          spacing={2}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth="true"
          spacing={2}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
