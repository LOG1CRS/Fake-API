import React from 'react';
import { Container, Typography, Grid, Collapse } from '@material-ui/core';
import useGetUsers from '../../hooks/useGetUsers';

const UsersList = () => {
  const [users] = useGetUsers();

  return (
    <>
      <Grid container>
        {users.map((users) => (
          <Typography>{users.name}</Typography>
        ))}
      </Grid>
      <Collapse
        timeout={0}
        in={users.length === 0}
        style={{ position: 'absolute' }}
      >
        <Typography variant="h2" align="center" style={{ opacity: 0.2 }}>
          No users created
        </Typography>
      </Collapse>
    </>
  );
};

export default UsersList;
