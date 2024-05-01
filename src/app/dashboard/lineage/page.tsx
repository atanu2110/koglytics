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
     const mockLineageData = [
      { source: 'Source A', transformations: ['Transformation 1', 'Transformation 2', 'Transformation 3'] },
      { source: 'Source B', transformations: ['Transformation 4', 'Transformation 5'] },
      { source: 'Source C', transformations: ['Transformation 6'] },
    ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Data Lineage
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
          Data Lineage 
          </Typography>
          {/* Report Form Component */}
          
      </Grid>
      <br/>
      
      </Grid>
      <div>
      <h2>Data Lineage</h2>
      <ul>
        {mockLineageData.map((item, index) => (
          <li key={index}>
            {/* Display source */}
            <span>{item.source}</span>

            {/* Display arrows and transformations */}
            {item.transformations.map((transformation, idx) => (
              <span key={idx}>
                {idx === 0 ? ' -> ' : ' => '}
                {transformation}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
    </Container>
  );
}
