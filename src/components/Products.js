import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TextField, TablePagination, Box, Grid } from '@material-ui/core';

const Products = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    { id: 1, productName: 'Apple iPhone 13', price: 999 },
    { id: 2, productName: 'Samsung Galaxy S21', price: 799 },
    { id: 3, productName: 'Google Pixel 6', price: 599 },
    { id: 4, productName: 'OnePlus 9', price: 729 },
    { id: 5, productName: 'Sony Xperia 5', price: 899 },
    { id: 6, productName: 'Xiaomi Mi 11', price: 699 },
    { id: 7, productName: 'Oppo Find X3', price: 1099 },
    { id: 8, productName: 'Huawei P50 Pro', price: 1199 },
    { id: 9, productName: 'Nokia 8.3 5G', price: 649 },
    { id: 10, productName: 'LG Wing', price: 999 },
    { id: 11, productName: 'Asus ROG Phone 5', price: 999 },
    { id: 12, productName: 'Motorola Edge+', price: 899 },
    { id: 13, productName: 'Realme GT', price: 499 },
    { id: 14, productName: 'Vivo X60 Pro', price: 749 },
    { id: 15, productName: 'Lenovo Legion Phone Duel', price: 849 },
    { id: 16, productName: 'Microsoft Surface Duo', price: 1399 },
    { id: 17, productName: 'BlackBerry Key2', price: 699 },
    { id: 18, productName: 'HTC U12+', price: 799 },
    { id: 19, productName: 'ZTE Axon 30', price: 499 },
    { id: 20, productName: 'TCL 20 Pro', price: 529 },
    { id: 21, productName: 'Honor Magic 3', price: 1099 },
    { id: 22, productName: 'Fairphone 4', price: 649 },
    { id: 23, productName: 'Alcatel 5V', price: 199 },
    { id: 24, productName: 'Meizu 18', price: 569 },
    { id: 25, productName: 'Sharp Aquos R6', price: 899 },
    { id: 26, productName: 'Panasonic Toughbook FZ-T1', price: 1499 },
  ];

  const filteredUsers = users.filter(user =>
    user.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.price.toString().includes(searchQuery)
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
            <h2 style={{marginLeft: '1rem'}}>Products</h2>
          </Grid>
          <Grid item xs={6} style={{paddingRight: '1rem'}}>
            <TextField
              label="Search by product name or price"
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
            <TableCell style={{fontWeight: '700'}}>Product ID</TableCell>
            <TableCell style={{fontWeight: '700'}}>Product Name</TableCell>
            <TableCell style={{fontWeight: '700'}}>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.productName}</TableCell>
              <TableCell>{user.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={filteredUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default Products;
