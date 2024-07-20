import React from 'react';
import { Grid } from '@mui/material';
import Calendar from '../components/Calendar';
import Charts from '../components/Charts';
import Kanban from '../components/Kanban';
import Tables from '../components/Tables';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Tables />
      </Grid>
      <Grid item xs={12} md={6}>
        <Charts />
      </Grid>
      <Grid item xs={12}>
        <Calendar />
      </Grid>
      <Grid item xs={12}>
        <Kanban />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
