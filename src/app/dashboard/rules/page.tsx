'use client';
import React, { useState } from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import { ChartScatter  as ChartScatterIcon }  from '@phosphor-icons/react/dist/ssr/ChartScatter';
import dayjs from 'dayjs';

import { config } from '@/config';
import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable } from '@/components/dashboard/customer/customers-table';
import type { Customer } from '@/components/dashboard/customer/customers-table';

import Card from '@mui/material/Card';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useUser } from '@/hooks/use-user';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import Grid from '@mui/material/Unstable_Grid2';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { ListBullets as ListBulletsIcon } from '@phosphor-icons/react/dist/ssr/ListBullets';
import { Database as DatabaseIcon } from '@phosphor-icons/react/dist/ssr/Database';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const customers = [
  {
    id: 'USR-010',
    name: 'Alcides Antonio',
    avatar: '/assets/avatar-10.png',
    email: 'alcides.antonio@devias.io',
    phone: '908-691-3242',
    address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  }
] satisfies Customer[];

function createData(
    id: number,
    age: number,
    sex: string,
    bmi: number,
    children: number,
    smoker: string,
    region: string,
    charges: number
  ) {
    return {id, age, sex, bmi, children, smoker, region, charges };
  }
  
  const rows = [
    createData(21, 36,'female',27.9,3,'yes','southwest',16884.924),
    createData(541, 37,'male',29.83,3,'no','northeast',6406.4107),
    createData(778, 33,'female',28.6,3,'no','southwest',4687.797),
    createData(889, 41,'male',21.78,3,'no','southeast',6272.4772),
    createData(1200, 25,'male',33.66,3,'no','southeast',4504.6624),
  ];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);
  
  const [table, setTable] = React.useState('');
  const metadata = { title: `Data Quality | Dashboard | ${config.site.name}` } satisfies Metadata;

  const { test } = useUser();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [colvalue, setColvalue] = useState('');
  

  const conditions = ["does not contain NULL", "is equal to", "contains value from list", "is greater than", "is greater than or equal to", "is less than", "is less than or equal to"];
  const fields = ["age", "sex", "bmi", "children", "smoker", "region", "charges"];

  const [condition, setCondition] = React.useState('');
  const [field, setField] = React.useState('');

  const [records, setRecords] = useState(false);

  const [selectedcolumn, setSelectedcolumn] = useState('');

  const [coldescribe, setColdescribe] = useState(null);
  const [outliers, setOutliers] = useState(0);

  const handleChange = (event: SelectChangeEvent) => {
    setTable(event.target.value as string);
    setLoading(true);
    // fetch('http://localhost:9009/api/v1/profile/d/schema')
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch data');
    //     }
    //     return response.json();
    //   })
    //   .then(jsonData => {
    //     setData(jsonData);
    //     setLoading(false);
    //     console.log(jsonData);
    //   })
    //   .catch(error => {
    //     setError(error.message);
    //     setLoading(false);
    //   });

    // Promise.all([
    //     fetch('http://localhost:9009/api/v1/profile/d/schema').then(response => response.json()),
    //     fetch('http://localhost:9009/api/v1/profile/s/duplicate/count').then(response => response.json()),
    //     fetch('http://localhost:9009/api/v1/profile/s/distribution').then(response => response.json())
    //   ])
    //     .then(([data1Response, data2Response, data3Response]) => {
    //         setData(data1Response);
    //         setDuplicateCount(data2Response);
    //         setDistribution(data3Response);
    //       setLoading(false);
    //     })
    //     .catch(error => {
    //       setError(error.message);
    //       setLoading(false);
    //     });
    setLoading(false);
  };

    const handleCondition = (event: SelectChangeEvent) => {
        setCondition(event.target.value as string);
  };

  const handleField = (event: SelectChangeEvent) => {
    setField(event.target.value as string);
};

const handleBack = () => setRecords(true);

    return (
        <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
      
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Data Quality Rules</Typography>
          {/* <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Import
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export
            </Button>
          </Stack> */}
        </Stack>


      </Stack>
          <Card sx={{ p: 1 }}>
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Table</InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={table}
                      label="Select Table"
                      onChange={handleChange}
                  >
                      {/* <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem> */}
                      {test.map((value: any) => (
                          <MenuItem
                              key={value}
                              value={value}>
                              {value}
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
          </Card>

          <div>
              <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={loading}
              >
                  <CircularProgress color="inherit" />
              </Backdrop>
          </div>

          {(table != '') &&
              <div>      
                  <Grid container spacing={1}>
                      <Grid lg={1}>
                          <Typography variant="h4">Rule : </Typography>
                      </Grid>
                      <Grid lg={2}>
                          <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={field}
                              label="Select Field"
                              onChange={handleField}
                          >
                              {fields.map((value: any) => (
                                  <MenuItem
                                      key={value}
                                      value={value}>
                                      {value}
                                  </MenuItem>
                              ))}
                          </Select>                        
                      </Grid>
                      <Grid lg={3}>
                          <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={condition}
                              label="Select Condition"
                              onChange={handleCondition}
                          >
                              {conditions.map((value: any) => (
                                  <MenuItem
                                      key={value}
                                      value={value}>
                                      {value}
                                  </MenuItem>
                              ))}
                          </Select>                        
                      </Grid>
                      <Grid lg={2}>
                      <TextField id="outlined-basic" label="Value" variant="outlined" />
                      </Grid>
                      <Grid lg={3}>
                      <Button startIcon={<ChartScatterIcon fontSize="var(--icon-fontSize-md)" />} variant="contained" onClick={handleBack}>
                                Show Records
                            </Button>
                        </Grid>
                  </Grid>
                    <br />
                    {
                        records && 
                        <div>
                        <Typography variant="h4">Showig Matching Records</Typography>
                        <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="right">Age</TableCell>
                                    <TableCell align="right">Sex</TableCell>
                                    <TableCell align="right">BMI</TableCell>
                                    <TableCell align="right">Children</TableCell>
                                    <TableCell align="right">Smoker</TableCell>
                                    <TableCell align="right">Region</TableCell>
                                    <TableCell align="right">Charges</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="right">{row.age}</TableCell>
                                        <TableCell align="right">{row.sex}</TableCell>
                                        <TableCell align="right">{row.bmi}</TableCell>
                                        <TableCell align="right">{row.children}</TableCell>
                                        <TableCell align="right">{row.smoker}</TableCell>
                                        <TableCell align="right">{row.region}</TableCell>
                                        <TableCell align="right">{row.charges}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </div>
                    }   


                </div>
            }

          
      </Stack>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
