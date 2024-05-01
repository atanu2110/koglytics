'use client';
import React, { useState } from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';

import { config } from '@/config';
import { Typography, TextField, Grid, Paper, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import { ChartScatter  as ChartScatterIcon }  from '@phosphor-icons/react/dist/ssr/ChartScatter';

export default function Page(): React.JSX.Element {



     const metadata = { title: `Settings | Dashboard | ${config.site.name}` } satisfies Metadata;
  
  const glossary = [
    { term: 'Term 1', definition: 'Definition 1' },
    { term: 'Term 2', definition: 'Definition 2' },
    { term: 'Term 3', definition: 'Definition 3' },
    // Add more static data entries as needed
  ];

  const glossaryTerms = [
    { name: 'Accounting', definition: 'The process of recording financial transactions pertaining to a business.' },
  { name: 'Brand Equity', definition: 'The commercial value that derives from consumer perception of the brand name of a particular product or service.' },
  { name: 'Customer Acquisition Cost (CAC)', definition: 'The cost associated with convincing a customer to buy a product or service.' },
  { name: 'Data Mining', definition: 'The process of discovering patterns in large datasets involving methods at the intersection of machine learning, statistics, and database systems.' },
  { name: 'Financial Forecasting', definition: 'The process of estimating future financial outcomes based on historical data and trends.' },
  { name: 'General Ledger', definition: 'A complete record of financial transactions over the life of a company.' },
  { name: 'Hypothesis Testing', definition: 'A statistical method used to make inferences about the population based on a sample of data.' },
  { name: 'Inventory Management', definition: 'The process of efficiently overseeing the constant flow of units into and out of an existing inventory.' },
  { name: 'Key Performance Indicator (KPI)', definition: 'A measurable value that demonstrates how effectively a company is achieving key business objectives.' },
  { name: 'Loyalty Program', definition: 'A marketing strategy designed to encourage repeat purchases by rewarding customers for their continued loyalty.' },
  { name: 'Market Segmentation', definition: 'The process of dividing a market of potential customers into groups, or segments, based on different characteristics.' },
  { name: 'Net Promoter Score (NPS)', definition: 'A metric used to measure the loyalty of a company\'s customer relationships, often considered as an indicator of overall customer satisfaction and loyalty.' },
  { name: 'Operating Expenses', definition: 'The costs associated with operating a business, excluding the cost of goods sold, interest, and taxes.' },
  { name: 'Profit Margin', definition: 'A measure of a company\'s profitability, calculated as net income divided by revenue, expressed as a percentage.' },
  { name: 'Quality Assurance (QA)', definition: 'The process of ensuring that products or services meet predefined quality standards and customer expectations.' },
  { name: 'Return on Investment (ROI)', definition: 'A financial metric used to evaluate the profitability of an investment, calculated as the ratio of net profit to the initial cost of investment.' },
  { name: 'Supply Chain Management (SCM)', definition: 'The management of the flow of goods and services, including the movement and storage of raw materials, work-in-progress inventory, and finished goods, from point of origin to point of consumption.' },
  { name: 'User Experience (UX)', definition: 'The overall experience of a person using a product, system, or service, including aspects such as usability, accessibility, and satisfaction.' },
  { name: 'Viral Marketing', definition: 'A marketing technique that uses pre-existing social networks to promote a product or service, typically through word-of-mouth or sharing on social media platforms.' },
  { name: 'Artificial Intelligence (AI)', definition: 'The simulation of human intelligence processes by computer systems, including learning, reasoning, and self-correction.' },
  { name: 'Big Data', definition: 'A term that refers to extremely large datasets that may be analyzed computationally to reveal patterns, trends, and associations, especially relating to human behavior and interactions.' },
  { name: 'Cloud Computing', definition: 'The delivery of computing services—servers, storage, databases, networking, software, analytics, and more—over the Internet (the cloud) to offer faster innovation, flexible resources, and economies of scale.' },
  { name: 'E-commerce', definition: 'The buying and selling of goods and services over the Internet, encompassing a wide range of transactions, including online retail, electronic payments, and digital marketing.' },
  { name: 'Fintech', definition: 'A portmanteau of "financial technology," referring to the use of technology to improve and automate financial services, including banking, investing, and payments.' },
  { name: 'Gamification', definition: 'The application of game-design elements and principles in non-game contexts to engage users, drive behavior, and enhance user experiences.' },
  { name: 'Internet of Things (IoT)', definition: 'A network of interconnected devices, objects, and sensors embedded with software, sensors, and network connectivity to collect and exchange data, enabling them to interact and communicate with each other.' },
  { name: 'Machine Learning', definition: 'A subset of artificial intelligence that provides systems the ability to learn and improve from experience without being explicitly programmed, using algorithms and statistical models to enable computers to perform tasks and make predictions based on data.' },
  { name: 'Predictive Analytics', definition: 'The use of data, statistical algorithms, and machine learning techniques to identify the likelihood of future outcomes based on historical data, enabling organizations to make data-driven decisions and anticipate future trends.' },
    // Add more glossary terms as needed
  ];
  // const [searchTerm, setSearchTerm] = useState('');
  // const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const filteredTerms = glossaryTerms.filter((term) =>
  //   term.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const [selectedLetter, setSelectedLetter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const filteredTerms = glossaryTerms.filter(term =>
    term.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedLetter || term.name.startsWith(selectedLetter))
  );


  return (
    // <Container maxWidth="lg">
    //   <Typography variant="h4" gutterBottom>
    //     Business Glossary
    //   </Typography>
    //   <Container maxWidth="md" style={{ marginTop: '20px' }}>
    //   <Typography variant="h3" component="h1" align="center" style={{ color: '#1976d2', marginBottom: '20px' }}>
    //     Business Glossary
    //   </Typography>
    //   <List>
    //     {glossary.map((item, index) => (
    //       <React.Fragment key={index}>
    //         <ListItem>
    //           <ListItemText primary={item.term} secondary={item.definition} />
    //         </ListItem>
    //         {index !== glossary.length - 1 && <Divider />}
    //       </React.Fragment>
    //     ))}
    //   </List>
    // </Container>
    // </Container>


    // <Grid container spacing={2} justifyContent="center">
    //   <Grid item xs={12}>
    //     <Typography variant="h4" align="center" gutterBottom>
    //       Business Glossary
    //     </Typography>
    //     <TextField
    //       label="Search"
    //       variant="outlined"
    //       fullWidth
    //       value={searchTerm}
    //       onChange={handleSearchChange}
    //       margin="normal"
    //     />
    //   </Grid>
    //   {alphabets.map((letter) => (
    //     <Grid item key={letter} xs={12}>
    //       <Accordion>
    //         <AccordionSummary expandIcon={<ChartScatterIcon />} aria-controls={`${letter}-content`} id={`${letter}-header`}>
    //           <Typography variant="h6">{letter}</Typography>
    //         </AccordionSummary>
    //         <AccordionDetails>
    //           <Grid container spacing={2}>
    //             {filteredTerms
    //               .filter((term) => term.name.startsWith(letter))
    //               .map((term) => (
    //                 <Grid item xs={12} md={6} key={term.name}>
    //                   <Paper elevation={3} style={{ padding: '10px' }}>
    //                     <Typography variant="h6">{term.name}</Typography>
    //                     <Typography variant="body1">{term.definition}</Typography>
    //                   </Paper>
    //                 </Grid>
    //               ))}
    //           </Grid>
    //         </AccordionDetails>
    //       </Accordion>
    //     </Grid>
    //   ))}
    // </Grid>

    <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography variant="h4" gutterBottom>Business Glossary</Typography>
    </Grid>
    <Grid item xs={12}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={2}>
        {[...Array(26)].map((_, index) => {
          const letter = String.fromCharCode(65 + index);
          return (
            <Grid item key={letter}>
              <Button onClick={() => handleLetterClick(letter)}>{letter}</Button>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
    <Grid item xs={12}>
      {filteredTerms.length > 0 ? (
        <Paper>
          <Typography variant="h5">Terms</Typography>
          <ul>
            {filteredTerms.map(term => (
              <li key={term.name}>
                <strong>{term.name}:</strong> {term.definition}
              </li>
            ))}
          </ul>
        </Paper>
      ) : (
        <Typography variant="body1">No matching terms found.</Typography>
      )}
    </Grid>
  </Grid>
  );
}
