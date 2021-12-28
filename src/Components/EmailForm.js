import { Box } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const EmailForm = () => {
    return (
        <Box>
             <Typography variant="h6" gutterBottom component="div">
                Send Email
            </Typography>
            <form action="">
                <label htmlFor="myEmail">To</label>
                <input type="text" value='mdhanif115825@gmail.com' />
                <label htmlFor="cliendEmail">From</label>
                <input type="text" placeholder='Your Email' />
                <textarea name="" placeholder='Write email...' id="" cols="30" rows="10"></textarea>
                <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
            </form>
        </Box>
    );
};

export default EmailForm;