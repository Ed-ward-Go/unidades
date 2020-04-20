import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Generate Order Data
function createData(id, nombre, apellidos, email, cedula) {
  return { id, nombre, apellidos, email, cedula };
}

const rows = [
  createData(0, 'Elvis', 'Presley', 'Tupelo@...', '3719'),
  createData(1, 'Paul', 'McCartney', 'London@...', '2574'),
  createData(2, 'Tom', 'Scholz', 'Boston@...', '1253'),
  createData(3, 'Michael', 'Jackson', 'Gary@...', '2000'),
  createData(4, 'Bruce', 'Springsteen', 'Long Branch@...', '5919'),
];

export default function Usuarios() {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>NOMBRE</TableCell>
            <TableCell>APELLIDO</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>CEDULA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.nombre}</TableCell>
              <TableCell>{row.apellidos}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.cedula}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}