import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Form from "../Form/Form";
import { useSelector, useDispatch } from "react-redux";
import { getVehicles } from "../../actions/vehicles";
import VehiclesTable from "../VehiclesTable/VehiclesTable";
import Histogram from "../Histogram/Histogram";
import Search from "../Search/Search";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicles());
  }, [currentId, dispatch]);

  const vehicles = useSelector((state) => state.vehicles);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newVehiclesList = vehicles.filter((vehicle,i) => {
        return Object.values(vehicle)
          .join(` ${i+1} `)
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newVehiclesList);
    } else {
      setSearchResults(vehicles);
    }
  };

  return (
    <Grow in>
      <Container>
      <Grid container justifyContent='flex-start' alignItems="flex-start" spacing={5}>
          <Grid item xs={12} sm={6} md={3} lg={3} >
            <Histogram
              vehicles={searchTerm.length < 1 ? vehicles : searchResults}
            />
          </Grid>
          
         
        </Grid>
        <Grid container justifyContent='flex-end' alignItems="flex-end" >          
          <Grid item xs={12} sm={6} md={3} lg={3} >
            <Search
              term={searchTerm}
              searchKeyword={searchHandler}
              vehicles={vehicles}
            />
          </Grid>
        </Grid>
     
        

        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={9}>
            <VehiclesTable
              vehicles={searchTerm.length < 1 ? vehicles : searchResults}
              setCurrentId={setCurrentId}
              term={searchTerm}
              searchKeyword={searchHandler}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
