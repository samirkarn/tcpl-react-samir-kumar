import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TextField, TablePagination, Box, Grid } from '@material-ui/core';

const Orders = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');

  const orders = [
    { orderId: 1, userId: 1, productId: 101, orderDate: '2023-01-15' },
    { orderId: 2, userId: 2, productId: 102, orderDate: '2023-01-16' },
    { orderId: 3, userId: 3, productId: 103, orderDate: '2023-01-17' },
    { orderId: 4, userId: 4, productId: 104, orderDate: '2023-01-18' },
    { orderId: 5, userId: 5, productId: 105, orderDate: '2023-01-19' },
    { orderId: 6, userId: 6, productId: 106, orderDate: '2023-01-20' },
    { orderId: 7, userId: 7, productId: 107, orderDate: '2023-01-21' },
    { orderId: 8, userId: 8, productId: 108, orderDate: '2023-01-22' },
    { orderId: 9, userId: 9, productId: 109, orderDate: '2023-01-23' },
    { orderId: 10, userId: 10, productId: 110, orderDate: '2023-01-24' },
    { orderId: 11, userId: 11, productId: 111, orderDate: '2023-01-25' },
    { orderId: 12, userId: 12, productId: 112, orderDate: '2023-01-26' },
    { orderId: 13, userId: 13, productId: 113, orderDate: '2023-01-27' },
    { orderId: 14, userId: 14, productId: 114, orderDate: '2023-01-28' },
    { orderId: 15, userId: 15, productId: 115, orderDate: '2023-01-29' },
    { orderId: 16, userId: 16, productId: 116, orderDate: '2023-01-30' },
    { orderId: 17, userId: 17, productId: 117, orderDate: '2023-01-31' },
    { orderId: 18, userId: 18, productId: 118, orderDate: '2023-02-01' },
    { orderId: 19, userId: 19, productId: 119, orderDate: '2023-02-02' },
    { orderId: 20, userId: 20, productId: 120, orderDate: '2023-02-03' },
  ];

  const filteredOrders = orders.filter(order =>
    order.orderId.toString().includes(searchQuery) ||
    order.userId.toString().includes(searchQuery) ||
    order.productId.toString().includes(searchQuery) ||
    order.orderDate.includes(searchQuery)
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0); 
  };

  return (
    <TableContainer component={Paper}>
    <Box p={2}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <h2 style={{marginLeft: '1rem'}}>Orders</h2>
          </Grid>
          <Grid item xs={6} style={{paddingRight: '1rem'}}>
            <TextField
              label="Search by orders"
              variant="outlined"
              fullWidth
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Grid>
        </Grid>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: '700'}}>Order ID</TableCell>
            <TableCell style={{fontWeight: '700'}}>User ID</TableCell>
            <TableCell style={{fontWeight: '700'}}>Product ID</TableCell>
            <TableCell style={{fontWeight: '700'}}>Order Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => (
            <TableRow key={order.orderId}>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>{order.userId}</TableCell>
              <TableCell>{order.productId}</TableCell>
              <TableCell>{order.orderDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={filteredOrders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default Orders;
