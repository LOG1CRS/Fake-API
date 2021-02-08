import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import useGetUsers from '../../hooks/useGetUsers';

const UsersList = () => {
  const [users] = useGetUsers();
  return (
    <Container
      style={{ height: '100%', alignItems: 'center', display: 'flex' }}
    >
      <Grid></Grid>
      <Typography
        variant="h2"
        align="center"
        style={{ width: '100%', opacity: 0.2 }}
      >
        No users created
      </Typography>
    </Container>
  );
};

export default UsersList;
