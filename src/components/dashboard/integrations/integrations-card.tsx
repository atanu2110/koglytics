'use client';
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Clock as ClockIcon } from '@phosphor-icons/react/dist/ssr/Clock';
import { PlugsConnected  as PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr/PlugsConnected';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import ConnectorModal from './connector-modal';
import Badge from '@mui/material/Badge';

export interface Integration {
  id: string;
  title: string;
  description: string;
  logo: string;
  installs: number;
  updatedAt: Date;
}

export interface IntegrationCardProps {
  integration: Integration;
}


export function IntegrationCard({ integration }: IntegrationCardProps): React.JSX.Element {

  const shapeStyles = { bgcolor: '', width: 40, height: 40 };
  const shapeCircleStyles = { borderRadius: '50%' };
  const [indicator, setIndicator] = useState(false);
  const circle = (
    <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
  );


  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent sx={{ flex: '1 1 auto' }}>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar src={integration.logo} variant="square" />
          </Box>
          <Stack spacing={1}>
            <Typography align="center" variant="h5">
              {integration.title}
            </Typography>
            <Typography align="center" variant="body1">
              {integration.description}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between', p: 2 }}>

        {indicator ? <Badge color="success" overlap="circular" badgeContent=" ">
        {circle}
      </Badge> : <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
          <ClockIcon fontSize="var(--icon-fontSize-sm)" />
          <Typography color="text.secondary" display="inline" variant="body2">
            Last Connected {dayjs(integration.updatedAt).format('MMM D, YYYY')}
          </Typography>
        </Stack>}


        {/* <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
          <DownloadIcon fontSize="var(--icon-fontSize-sm)" />
          <Typography color="text.secondary" display="inline" variant="body2">
            {integration.installs} installs
          </Typography>
        </Stack> */}
        {/* <Button startIcon={<PlugsConnectedIcon fontSize="var(--icon-fontSize-md)" />} variant="contained" onClick={handleClick}>
            Connect
          </Button> */}
        <ConnectorModal setIndicator={setIndicator} />
      </Stack>
    </Card>
  );
}
