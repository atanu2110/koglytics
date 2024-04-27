'use client';
import React, { useState } from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


export default function Page(): React.JSX.Element {

     const metadata = { title: `Settings | Dashboard | ${config.site.name}` } satisfies Metadata;
  

  const report = [
    { reportName: 'Report 1', schedule: 'Daily', frequency: 'Every day', status: "success" },
    { reportName: 'Report 2', schedule: 'Weekly', frequency: 'Every Monday', status: "pending" },
    { reportName: 'Report 3', schedule: 'Monthly', frequency: 'First day of the month', status: "failed" },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Prepare for ML
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Machine Learning 
          </Typography>
          {/* Report Form Component */}
          
      </Grid>
      <br/>
      
      </Grid>
    </Container>
  );
}
