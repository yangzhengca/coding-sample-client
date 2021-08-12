import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from "@material-ui/icons/Edit";
import { StyledTableCell, StyledTableRow } from "./styles";
import { useDispatch } from "react-redux";
import { deleteVehicle } from "../../actions/vehicles";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function VehiclesTable({ vehicles, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="center">Make</StyledTableCell>
            <StyledTableCell align="center">Model</StyledTableCell>
            <StyledTableCell align="center">Year</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Edit / Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map((vehicle, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell align="center">{i + 1}</StyledTableCell>
              <StyledTableCell align="center">{vehicle.make}</StyledTableCell>
              <StyledTableCell align="center">{vehicle.model}</StyledTableCell>
              <StyledTableCell align="center">{vehicle.year}</StyledTableCell>
              <StyledTableCell align="center">${vehicle.price}</StyledTableCell>
              <StyledTableCell align="center">
                {vehicle.isSold ? "Sold" : "Live"}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button onClick={() => setCurrentId(vehicle._id)}>
                  <EditIcon />
                </Button>
                <Button onClick={() => dispatch(deleteVehicle(vehicle._id))}>
                  <DeleteForeverIcon />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
