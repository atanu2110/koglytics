'use client';
import React, { useState } from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
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
  const [duplicateCount, setDuplicateCount] = useState(0);
  const [distribution, setDistribution] = useState('');

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

    Promise.all([
        fetch('http://localhost:9009/api/v1/profile/d/schema').then(response => response.json()),
        fetch('http://localhost:9009/api/v1/profile/s/duplicate/count').then(response => response.json()),
        fetch('http://localhost:9009/api/v1/profile/s/distribution').then(response => response.json())
      ])
        .then(([data1Response, data2Response, data3Response]) => {
            setData(data1Response);
            setDuplicateCount(data2Response);
            setDistribution(data3Response);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
  };

  const handleCellClick = (e) => {
    alert(e.target.textContent);
    console.log(distribution[3]);
}

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Data Quality</Typography>
          {/* <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Import
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export
            </Button>
          </Stack> */}
        </Stack>
        {/* <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div> */}


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

          {(table != '' && data != null) &&
              <div>
                  <Grid container spacing={3}>
                      <Grid lg={3} sm={6} xs={12}>
                          <Typography variant="h4">Data Quality <Select
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
                          </Select></Typography>
                      </Grid>
                  </Grid>
                  <br />
                  <Grid container spacing={3}>
                      <Grid lg={3} sm={6} xs={12}>
                          <Card>
                              <CardContent>
                                  <Stack spacing={2}>
                                      <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
                                          <Stack spacing={1}>
                                              <Typography color="text.secondary" gutterBottom variant="overline">
                                                  Total Rows
                                              </Typography>
                                              <Typography variant="h4">{data.rows}</Typography>
                                          </Stack>
                                          <Avatar sx={{ backgroundColor: 'var(--mui-palette-warning-main)', height: '56px', width: '56px' }}>
                                              <ListBulletsIcon fontSize="var(--icon-fontSize-lg)" />
                                          </Avatar>
                                      </Stack>
                                  </Stack>
                              </CardContent>
                          </Card>
                      </Grid>
              <Grid lg={3} sm={6} xs={12}>
              <Card>
                      <CardContent>
                          <Stack spacing={2}>
                              <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
                                  <Stack spacing={1}>
                                      <Typography color="text.secondary" gutterBottom variant="overline">
                                          Total Size
                                      </Typography>
                                      <Typography variant="h4">{data.size}</Typography>
                                  </Stack>
                                  <Avatar sx={{ backgroundColor: 'var(--mui-palette-warning-main)', height: '56px', width: '56px' }}>
                                      <DatabaseIcon fontSize="var(--icon-fontSize-lg)" />
                                  </Avatar>
                              </Stack>                    
                          </Stack>
                      </CardContent>
                  </Card>
              </Grid>
              <Grid lg={3} sm={6} xs={12}>
              <Card>
                      <CardContent>
                          <Stack spacing={2}>
                              <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
                                  <Stack spacing={1}>
                                      <Typography color="text.secondary" gutterBottom variant="overline">
                                          Duplicate Rows
                                      </Typography>
                                      <Typography variant="h4">{duplicateCount}</Typography>
                                  </Stack>
                                  <Avatar sx={{ backgroundColor: 'var(--mui-palette-warning-main)', height: '56px', width: '56px' }}>
                                  <ListBulletsIcon fontSize="var(--icon-fontSize-lg)" />
                                  </Avatar>
                              </Stack>                    
                          </Stack>
                      </CardContent>
                  </Card>
              </Grid>
          </Grid>
          <br/>
          {/* <CustomersTable
              count={paginatedCustomers.length}
              page={page}
              rows={paginatedCustomers}
              rowsPerPage={rowsPerPage}
          /> */}

                  <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 300 }} aria-label="simple table">
                          <TableHead>
                              <TableRow>
                                  <TableCell>Name</TableCell>
                                  <TableCell align="right">Data Type</TableCell>
                                  <TableCell align="right">Is Nullable</TableCell>
                                  <TableCell align="right">Unique Count</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {data.fields.map((row) => (
                                  <TableRow
                                      key={row.name}
                                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  >
                                      <TableCell component="th" scope="row" onClick={handleCellClick}
                                      style={{backgroundColor:'#dfe1e4', color: 'black',}}>
                                      <u><strong>{row.name}</strong></u>
                                      </TableCell>
                                      <TableCell align="right">{row.type}</TableCell>
                                      <TableCell align="right">{row.nullable ? 'true' : 'false'}</TableCell>
                                      <TableCell align="right">{row.uniqueValuesCount}</TableCell>
                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </TableContainer>
                  <br/>

                  <Grid lg={3} sm={6} xs={12}>
                  <Typography variant="h4">Table Distribution</Typography><br/>
                      <TableContainer component={Paper}>
                          <Table>
                              <TableHead>
                                  <TableRow>
                                      {distribution.columns.map((column, index) => (
                                          <TableCell key={index}>{column}</TableCell>
                                      ))}
                                  </TableRow>
                              </TableHead>
                              <TableBody>
                                  {distribution.rows.map((row, rowIndex) => (
                                      <TableRow key={rowIndex}>
                                          {distribution.columns.map((column, colIndex) => (
                                              <TableCell key={colIndex}>{row[column]}</TableCell>
                                          ))}
                                      </TableRow>
                                  ))}
                              </TableBody>
                          </Table>
                      </TableContainer>
                  </Grid>

              </div>
          }

          
      </Stack>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
