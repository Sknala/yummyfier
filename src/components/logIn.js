import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function LogIn() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="text" style={{ color: '#614051', fontSize: '15px', fontWeight: 'bold', float: 'right', marginRight: '100px' }} onClick={handleClickOpen}>
                Log In
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ color: '#614051', fontWeight: 'bold' }}>Log In</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Log In
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="username"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error" >Cancel</Button>
                    <Button onClick={handleClose}>Log In</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}