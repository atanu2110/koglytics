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
import Chip from '@mui/material/Chip';
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

  function createRulesData(
    name: string,
    table: string,
    dimension: string,
    rule: string,
    status: string,
    total: string,
    pass: string,
    threshold: string,
    result: string,
    createdAt: string,
    createdBy: string
  ) {
    return {name, table, dimension, rule, status,total, pass, threshold, result,createdAt, createdBy };
  }
  
  const rules = [
    createRulesData('user-email-001', 'user','completeness', 'where email = NULL','APPROVED','1220', '300', '>85%', '75.4%', '01-01-2024 01:50:20', 'ATANU'),
    createRulesData('insurance-smoker-002', 'insurance', 'accuracy', 'where smoker = yes','APPROVED','1220', '300','>90%','75.4%', '10-02-2024 12:10:10', 'ATANU'),
    createRulesData('insurance-charges-003', 'insurance','accuracy','where charges > 25000','PENDING','1220', '300','>85%','75.4%', '15-03-2024 06:51:42', 'satish'),
    createRulesData('payment-payment-004', 'payment','validity','where payment = false and year = 2024','APPROVED','1220', '300', '>85%','75.4%','16-03-2024 05:50:20', 'Arindam')
  ];

export default function Page(): React.JSX.Element {
  {/*const page = 0;
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

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const generateText = () => {
    return `You selected ${selectedValue} from the ${selectedCategory} category.`;
  };

  const handleChange = (event: SelectChangeEvent) => {
    setTable(event.target.value as string);
    setLoading(true);
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

        */}

        const [conditions, setConditions] = useState([{ field: '', operator: '', value: '', logicalOperator: 'AND' }]);
        const [table, setTable] = React.useState('');
        const [loading, setLoading] = useState(false);
        const { test } = useUser();
        const [records, setRecords] = useState(false);

        const handleChange = (event: SelectChangeEvent) => {
            setTable(event.target.value as string);
            setLoading(true);
            setLoading(false);
          };

  const handleAddCondition = () => {
    setConditions([...conditions, { field: '', operator: '', value: '', logicalOperator: 'AND' }]);
  };

  const handleRemoveCondition = (index) => {
    const newConditions = [...conditions];
    newConditions.splice(index, 1);
    setConditions(newConditions);
  };

  const handleConditionChange = (index, field, value) => {
    const newConditions = [...conditions];
    newConditions[index][field] = value;
    setConditions(newConditions);
  };

  const handleLogicalOperatorChange = (index, value) => {
    const newConditions = [...conditions];
    newConditions[index].logicalOperator = value;
    setConditions(newConditions);
  };

  const handleShowRecord = () => {
    setRecords(true);
  };
  

  const buildQuery = () => {
    //let query = 'SELECT * FROM table WHERE ';
    let query = 'SHOW RECORDS FROM selected table WHERE ';
    conditions.forEach((condition, index) => {
      query += `${condition.field} ${condition.operator} '${condition.value}'`;
      if (index < conditions.length - 1) {
        query += ` ${condition.logicalOperator} `;
      }
    });
    return query;
  };
  return (
    <div>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Data Quality Rules</Typography>
        </Stack>

        <Typography variant="h4">Rules</Typography>
                        <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Table</TableCell>
                                    <TableCell align="right">Dimension</TableCell>
                                    <TableCell align="right">Rule</TableCell>
                                    <TableCell align="right">Total rows</TableCell>
                                    <TableCell align="right">Pass</TableCell>
                                    <TableCell align="right">Threshold</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                    <TableCell align="right">Last Run</TableCell>
                                    <TableCell align="right">Created By</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                      {rules.map((row) => (
                          <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                              <TableCell component="th" scope="row">
                                  {row.name}
                              </TableCell>
                              <TableCell align="right">{row.table}</TableCell>
                              <TableCell align="right">{row.dimension}</TableCell>
                              <TableCell align="right">{row.rule}</TableCell>
                              <TableCell align="right">{row.total}</TableCell>
                              <TableCell align="right">{row.pass}</TableCell>
                              <TableCell align="right">{row.threshold}</TableCell>
                              <TableCell align="right"><Chip style={{background: 'red', color: 'white'}} label={row.result} size="small" /></TableCell>
                              <TableCell align="right">
                                  {row.createdAt}
                              </TableCell>
                              <TableCell align="right">{row.createdBy}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>
          <br /><br />
          {/* <Card sx={{ p: 1 }}>
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Table</InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={table}
                      label="Select Table"
                      onChange={handleChange}
                  >
                
                      {test.map((value: any) => (
                          <MenuItem
                              key={value}
                              value={value}>
                              {value}
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
          </Card> */}

          <div>
              <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={loading}
              >
                  <CircularProgress color="inherit" />
              </Backdrop>
          </div>
          <br />
          <Typography variant="h6">Rule Builder</Typography>
          <br />
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Table</InputLabel>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={table}
                  label="Select Table"
                  onChange={handleChange}
              >

                  {test.map((value: any) => (
                      <MenuItem
                          key={value}
                          value={value}>
                          {value}
                      </MenuItem>
                  ))}
              </Select>
          </FormControl>
          <br /><br />
          {conditions.map((condition, index) => (
              <div key={index} style={{ marginBottom: '16px' }}>
                  <FormControl style={{ minWidth: '150px', marginRight: '8px' }}>
                      <InputLabel>Field</InputLabel>
            <Select
              value={condition.field}
              onChange={(e) => handleConditionChange(index, 'field', e.target.value)}
            >
              <MenuItem value="">Select Field</MenuItem>
              <MenuItem value="age">Age</MenuItem>
              <MenuItem value="sex">Sex</MenuItem>
              <MenuItem value="bmi">BMI</MenuItem>
              <MenuItem value="children">Children</MenuItem>
              <MenuItem value="smoker">Smoker</MenuItem>
              <MenuItem value="region">Region</MenuItem>
              <MenuItem value="charges">Charges</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ minWidth: '150px', marginRight: '8px' }}>
            <InputLabel>Operator</InputLabel>
            <Select
              value={condition.operator}
              onChange={(e) => handleConditionChange(index, 'operator', e.target.value)}
            >
              <MenuItem value="">Select Operator</MenuItem>
              <MenuItem value="=">Equal to</MenuItem>
              <MenuItem value="!=">Not equal to</MenuItem>
              <MenuItem value=">">Greater than</MenuItem>
              <MenuItem value="<">Less than</MenuItem>
              <MenuItem value=">=">Greater than or equal to</MenuItem>
              <MenuItem value="<=">Less than or equal to</MenuItem>
            </Select>
          </FormControl>
          <TextField
            value={condition.value}
            onChange={(e) => handleConditionChange(index, 'value', e.target.value)}
            label="Value"
            style={{ marginRight: '8px' }}
          />
          <FormControl style={{ minWidth: '100px', marginRight: '8px' }}>
            <InputLabel>Logical Operator</InputLabel>
            <Select
              value={condition.logicalOperator}
              onChange={(e) => handleLogicalOperatorChange(index, e.target.value)}
            >
              <MenuItem value="AND">AND</MenuItem>
              <MenuItem value="OR">OR</MenuItem>
            </Select>
          </FormControl>
          <Button onClick={() => handleRemoveCondition(index)} variant="outlined">Remove</Button>
        </div>
      ))}
      <Button onClick={handleAddCondition} variant="contained">Add Condition</Button>
      <div style={{ marginTop: '16px' }}>
        <Typography variant="body1">Generated Rule:</Typography>
        <TextField value={buildQuery()} variant="outlined" multiline rows={4} fullWidth />
      </div>
      <br/> 
      <Grid container spacing={3}>
      <Grid lg={2}><Button onClick={handleShowRecord} variant="contained">Run Rule</Button></Grid>
      <Grid lg={3} sm={6} xs={12}><Button onClick={handleShowRecord} variant="contained">Save Rule</Button></Grid>
      </Grid>
      
      <br/> 
      {
              records &&
              <div>
                  <Grid container spacing={3}>
                      <Grid lg={3} sm={6} xs={12}>
                          <Card>
                              <CardContent>
                                  <Stack spacing={2}>
                                      <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
                                          <Stack spacing={1}>
                                              <Typography color="text.secondary" gutterBottom variant="overline">
                                                  Matched Records
                                              </Typography>
                                              <Typography variant="h4">1200</Typography>
                                          </Stack>
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
                                                  Unmatched Records
                                              </Typography>
                                              <Typography variant="h4">300</Typography>
                                          </Stack>
                                      </Stack>
                                  </Stack>
                              </CardContent>
                          </Card>
                      </Grid></Grid>
                      <br/>

                        <Typography variant="h4">Showing Matching Records</Typography>
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
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
