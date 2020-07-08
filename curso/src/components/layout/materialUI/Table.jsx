import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
//Dessa forma se cria um banco de dados em JSX//
function createData(bebidas, preço){
    return {bebidas, preço};
}
const datas = [   
    createData('Skol puro malte ' , 5.00),
    createData('Brahma Chopp ' , 6.00),
    createData('Corona Beer ' , 7.00),
    createData('Heineken ' , 6.00),
    createData('Skol Beats ' , 5.00),
     

     ];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Bebidas (+18)</TableCell>
            <TableCell align="right">Preço (R$)</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data) => (
            <TableRow key={data.bebidas}>
              <TableCell component="th" scope="row">
                {data.bebidas}
              </TableCell>
              <TableCell align="right">{data.preço}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
