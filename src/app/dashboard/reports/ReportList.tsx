import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import type { SxProps } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import dayjs from 'dayjs';

const statusMap = {
  pending: { label: 'Pending', color: 'warning' },
  success: { label: 'Success', color: 'success' },
  failed: { label: 'Failed', color: 'error' },
} as const;

export interface Report {
    reportName: string;
    schedule: string;
    frequency: string;
  status: 'pending' | 'success' | 'failed';
}

export interface ReportListProps {
    reports?: Report[];
  sx?: SxProps;
}

export function ReportList({ reports, sx }: ReportListProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader title="Latest orders" />
      <Divider />
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 450 }}>
          <TableHead>
            <TableRow>
              <TableCell>Report Name</TableCell>
              <TableCell>Schedule</TableCell>
              <TableCell>Frequency</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report) => {
              const { label, color } = statusMap[report.status] ?? { label: 'Unknown', color: 'default' };

              return (
                <TableRow hover key={report.reportName}>
                  <TableCell>{report.reportName}</TableCell>
                  <TableCell>{report.schedule}</TableCell>
                  <TableCell>{report.frequency}</TableCell>
                  <TableCell>
                    <Chip color={color} label={label} size="small" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
}


export default ReportList;