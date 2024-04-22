import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { PlugsConnected as PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr/PlugsConnected';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ConnectorModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [hostname, setHostname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleConnect = () => {
        
        setLoading(true);
        // Make API call to submit data
        const formData = {
          hostname: hostname,
          username: username,
          password: password,
          type: 'sql'
        };
        fetch('http://localhost:9009/api/v1/connector', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then(response => {
            setLoading(false);
            if (!response.ok) {
              throw new Error('Failed to submit data');
            }
            // Handle success
            console.log('Data submitted successfully');
          })
          .catch(error => {
            setLoading(false);
            // Handle error
            console.error('Error submitting data:', error.message);
          });
          setOpen(false);
      };


    return (
        <div>
            <Button startIcon={<PlugsConnectedIcon fontSize="var(--icon-fontSize-md)" />} variant="contained" onClick={handleOpen}>
                Connect
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Connection Details"}
                </DialogTitle>
                <DialogContent>
                    <Grid container direction={"column"} spacing={5}>
                        <Grid item>
                            <TextField id="outlined-basic" label="Hostname" variant="outlined" fullWidth value={hostname}
                                onChange={(e) => setHostname(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    {loading ? (
                        <CircularProgress />
                    ) : (
                        <>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleConnect} autoFocus>
                                Submit
                            </Button>
                        </>
                    )}
                </DialogActions>
            </Dialog>
        </div>
    );
}