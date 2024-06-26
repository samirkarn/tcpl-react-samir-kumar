import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TextField, TablePagination, Box, Grid } from '@material-ui/core';

const Users = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    { id: 1, fullName: 'John Doe', email: 'john.doe1@example.com' },
    { id: 2, fullName: 'Jane Smith', email: 'jane.smith2@example.com' },
    { id: 3, fullName: 'Alice Johnson', email: 'alice.johnson3@example.com' },
    { id: 4, fullName: 'Bob Brown', email: 'bob.brown4@example.com' },
    { id: 5, fullName: 'Charlie Davis', email: 'charlie.davis5@example.com' },
    { id: 6, fullName: 'Diana Evans', email: 'diana.evans6@example.com' },
    { id: 7, fullName: 'Edward Green', email: 'edward.green7@example.com' },
    { id: 8, fullName: 'Fiona Harris', email: 'fiona.harris8@example.com' },
    { id: 9, fullName: 'George Hill', email: 'george.hill9@example.com' },
    { id: 10, fullName: 'Hannah Lewis', email: 'hannah.lewis10@example.com' },
    { id: 11, fullName: 'Ian Martin', email: 'ian.martin11@example.com' },
    { id: 12, fullName: 'Jessica Nelson', email: 'jessica.nelson12@example.com' },
    { id: 13, fullName: 'Kevin Moore', email: 'kevin.moore13@example.com' },
    { id: 14, fullName: 'Laura Perez', email: 'laura.perez14@example.com' },
    { id: 15, fullName: 'Michael Roberts', email: 'michael.roberts15@example.com' },
    { id: 16, fullName: 'Nancy Scott', email: 'nancy.scott16@example.com' },
    { id: 17, fullName: 'Oscar Taylor', email: 'oscar.taylor17@example.com' },
    { id: 18, fullName: 'Patricia Walker', email: 'patricia.walker18@example.com' },
    { id: 19, fullName: 'Quincy White', email: 'quincy.white19@example.com' },
    { id: 20, fullName: 'Rachel Young', email: 'rachel.young20@example.com' },
    { id: 21, fullName: 'Samuel Adams', email: 'samuel.adams21@example.com' },
    { id: 22, fullName: 'Tina Baker', email: 'tina.baker22@example.com' },
    { id: 23, fullName: 'Ursula Carter', email: 'ursula.carter23@example.com' },
    { id: 24, fullName: 'Victor Diaz', email: 'victor.diaz24@example.com' },
    { id: 25, fullName: 'Wendy Edwards', email: 'wendy.edwards25@example.com' },
    { id: 26, fullName: 'Xavier Flores', email: 'xavier.flores26@example.com' },
  ];
  
  

  const filteredUsers = users.filter(user =>
    user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
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
    console.log(event.target.value)
  };

  console.log(searchQuery)

  return (
    <TableContainer component={Paper}>
      <Box p={2}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <h2 style={{marginLeft: '1rem'}}>Users</h2>
          </Grid>
          <Grid item xs={6} style={{paddingRight: '1rem'}}>
            <TextField
              label="Search by Name or Email"
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
            <TableCell style={{fontWeight: '700'}}>User ID</TableCell>
            <TableCell style={{fontWeight: '700'}}>Full Name</TableCell>
            <TableCell style={{fontWeight: '700'}}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.email}</TableCell>
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

export default Users;
