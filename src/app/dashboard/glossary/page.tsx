'use client';
import React, { useState } from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { List, ListItem, ListItemText, Divider } from '@mui/material';


export default function Page(): React.JSX.Element {

     const metadata = { title: `Settings | Dashboard | ${config.site.name}` } satisfies Metadata;
  
  const glossary = [
    { term: 'Term 1', definition: 'Definition 1' },
    { term: 'Term 2', definition: 'Definition 2' },
    { term: 'Term 3', definition: 'Definition 3' },
    // Add more static data entries as needed
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Business Glossary
      </Typography>
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h3" component="h1" align="center" style={{ color: '#1976d2', marginBottom: '20px' }}>
        Business Glossary
      </Typography>
      <List>
        {glossary.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={item.term} secondary={item.definition} />
            </ListItem>
            {index !== glossary.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Container>
    </Container>
  );
}
