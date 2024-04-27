import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const frequencyOptions = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
];

function ReportForm({ onSubmit }) {
  const [reportName, setReportName] = useState('');
  const [schedule, setSchedule] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ reportName, schedule, frequency });
    setReportName('');
    setSchedule('');
    setFrequency('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Report Name"
        variant="outlined"
        fullWidth
        value={reportName}
        onChange={(e) => setReportName(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Schedule"
        variant="outlined"
        fullWidth
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
        margin="normal"
      />
      <TextField
        select
        label="Frequency"
        variant="outlined"
        fullWidth
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        margin="normal"
      >
        {frequencyOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" color="primary" type="submit">
        New Report
      </Button>
    </form>
  );
}

export default ReportForm;
