'use client';
import React, { useState } from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ReportForm from './ReportForm';
import ScheduledReportsList from './ScheduledReportsList';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ReportList from './ReportList';



export default function Page(): React.JSX.Element {

     const metadata = { title: `Settings | Dashboard | ${config.site.name}` } satisfies Metadata;
   // State to manage scheduled reports
  const [scheduledReports, setScheduledReports] = useState([]);

  // State to manage selected report
  const [selectedReport, setSelectedReport] = useState('');

  // Function to add a new scheduled report
  const handleAddScheduledReport = (newReport) => {
    setScheduledReports([...scheduledReports, newReport]);
  };

  // Function to remove a scheduled report
  const handleRemoveScheduledReport = (reportId) => {
    setScheduledReports(scheduledReports.filter(report => report.id !== reportId));
  };

  // Function to handle report selection
  const handleReportSelection = (event) => {
    setSelectedReport(event.target.value);
  };

  const report = [
    { reportName: 'Report 1', schedule: 'Daily', frequency: 'Every day', status: "success" },
    { reportName: 'Report 2', schedule: 'Weekly', frequency: 'Every Monday', status: "pending" },
    { reportName: 'Report 3', schedule: 'Monthly', frequency: 'First day of the month', status: "failed" },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Report Scheduler
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Schedule Report
          </Typography>
          {/* Report Form Component */}
          <ReportForm 
            selectedReport={selectedReport}
            onAddScheduledReport={handleAddScheduledReport} 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Scheduled Reports
          </Typography>
          {/* Scheduled Reports List Component */}
          {/* <ScheduledReportsList
            reports={report}
          /> */}
          <ReportList reports={report}
          />
        </Grid>
      </Grid>
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Existing Reports
          </Typography>
          <Select
            value={selectedReport}
            onChange={handleReportSelection}
            fullWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* Populate dropdown with existing reports */}
            <MenuItem value="report1">Report 1</MenuItem>
            <MenuItem value="report2">Report 2</MenuItem>
            <MenuItem value="report3">Report 3</MenuItem>
            {/* Add more reports as needed */}
          </Select>
        </Grid>
      </Grid>
    </Container>
  );
}
