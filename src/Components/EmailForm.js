import { Box } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';

const useStyle = makeStyles({
    inputText:{
        fontSize:20
    },
    inputArea:{
        border: "2px solid gray",
        borderRadius: "20px",
        padding: "8px 15px",
        fontSize: "15px",
        margin: "10px 0px",
       width:"70%"
    },
    textArea:{
        width: "90%",
        padding: "8px 15px",
        border: "2px solid gray",
        borderRadius: "5px",
        margin: "15px 0px"
    }
})

const EmailForm = () => {
    const classes = useStyle();
    const sendEmail = e =>{
        e.preventDefault();
        emailjs.sendForm('service_ys3v9za','template_1l0umhy',e.target,"user_WDClpve9lZTHJckbAFp3C").then(res=>{
            alert("Email Send Successfully")
            
        }).catch(err => console.log(err));
    }
    return (
        <Box sx={{opacity:".9"}}>
             <Typography variant="h6" gutterBottom component="div">
                Send Email
            </Typography>
            <form action="" onSubmit={sendEmail}>
                 <label className={classes.inputText} htmlFor="userEmail">From </label><br />
                <input type="text" className={classes.inputArea} placeholder='Your Email' name="customerEmail"/> <br />
                <label className={classes.inputText} htmlFor="myEmail">To </label><br />
                <input className={classes.inputArea} type="text" value='mdhanif115825@gmail.com' name="ownerEmail" /> <br />
               
                <textarea name="message" className={classes.textArea} placeholder='Write email...' id="" width="100%" rows="7"></textarea> <br />
                <Button sx={{position: "revert"}} type="submit" value="Send" variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
            </form>
        </Box>
    );
};

export default EmailForm;