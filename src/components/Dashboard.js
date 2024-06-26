import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { Link as RouterLink, Outlet } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
          <Typography variant='h5' style={{textAlign:'center', marginBottom: '1rem', marginTop: '1rem', fontWeight: '700', color: '#3F68D5 '}}>Team Computer</Typography>
        <List>
          <ListItem button component={RouterLink} to="/dashboard/users">
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button component={RouterLink} to="/dashboard/products">
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button component={RouterLink} to="/dashboard/orders">
            <ListItemText primary="Orders" />
          </ListItem>
        </List>
      </Drawer>

      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
