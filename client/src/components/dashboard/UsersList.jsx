import React from 'react';
import { Container, Typography, Grid, Collapse } from '@material-ui/core';
import useGetUsers from '../../hooks/useGetUsers';

const UsersList = () => {
  const [users] = useGetUsers();

  return (
    <Container
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <Collapse
        timeout={0}
        in={users.length === 0}
        style={{ position: 'absolute' }}
      >
        <Typography variant="h2" align="center" style={{ opacity: 0.2 }}>
          No users created
        </Typography>
      </Collapse>
      <Grid container style={{ height: '100%' }}>
        {users.map((users) => users.name)}
      </Grid>
    </Container>
  );
};

export default UsersList;
