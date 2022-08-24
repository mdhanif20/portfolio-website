import { Box } from '@mui/material';
import React, { useRef } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import emailjs from 'emailjs-com';

const useStyle = makeStyles({
    inputText:{
        fontSize:20
    },
    inputArea:{
        border: "2px solid rgba(254, 80, 22, 0.3)",
        borderRadius: "20px",
        padding: "8px 15px",
        margin: "10px 0px",
        width:"90%",
        backgroundColor:"#1a1d29e0",
        color:"#fff",
        fontSize:"20px",
    },
    textArea:{
        width: "90%",
        padding: "8px 15px",
        backgroundColor:"#1a1d29e0",
        color:"#fff",
        fontSize:"20px",
        border: "2px solid rgba(254, 80, 22, 0.3)",
        borderRadius: "5px",
        margin: "15px 0px"
    },
    sendButtom:{
        background:"#FE5205",
        boxShadow: 3,
        fontWeight: 500,
        py:1, borderRadius: 20,
        position: "revert",
    }
})

const EmailForm = () => {
    const classes = useStyle();
    const form = useRef();
    const sendEmail = e =>{
        
        e.preventDefault()
        emailjs.sendForm('service_64fo5li', 'template_97mzt4i', e.target, 'sEIjvaT255FOB530n')
        .then((res) => {
            alert("Email Send Successfully.")
            form.current.reset(); 
        }).catch(err => console.log(err));
    }
    return (
        <Box sx={{color:"#fff",mt:4,mb:15,pl:{sx:2,sm:4,md:5}}} >
             <Typography sx={{textAlign:"center",fontSize:"1.8rem",color:"#FE5205"}} variant="button" display="block" gutterBottom>
                send me an email
            </Typography>
             <Typography sx={{textAlign:"center",fontSize:"1rem",mb:5}} variant="button" display="block" gutterBottom>
                I'm very responsive to messages
            </Typography>
            <form ref={form} action="" onSubmit={sendEmail}>
                <Box sx={{display:{xs:"block",sm:"flex"},width:"100%"}}>
                    <Box sx={{width:{xs:"100%",sm:"47%"}}}>
                        <label className={classes.inputText} htmlFor="userEmail">Name</label><br />
                        <input  style={{height:"auto"}}  name="user_name" type="text" className={classes.inputArea} placeholder='Your Name'/>
                    </Box>
                    <Box sx={{width:{xs:"100%",sm:"47%"},pl:{xs:0,sm:1}}}>
                        <label className={classes.inputText} htmlFor="userEmail">Your Email </label><br />
                        <input  style={{height:"auto"}} type="email" className={classes.inputArea} placeholder='Your Email' name="user_email"/>
                    </Box>
                </Box>
                
                <label className={classes.inputText} htmlFor="myEmail">To </label><br />
                <input  style={{height:"auto"}} className={classes.inputArea} type="text" value='mdhanif2921@gmail.com' name="ownerEmail" /> <br />
               
                <textarea name="message" className={classes.textArea} placeholder='Write email...' id="" width="100%" style={{height:"35vh"}} rows="7"></textarea> <br />
                <Button  sx={{
                     background:"#FE5205",
                     boxShadow: 3,
                     border:"2px solid rgba(254, 80, 22, 0.3)",
                     fontSize:"17px",
                     fontWeight: 500,
                     py:1,px:3, borderRadius: 20,
                     position: "revert",
                     transition: ".4s",
                     '&:hover': {
                                 color:"#fff",
                                 backgroundColor: '#FE5205',
                                 transform: "scale(1.1)"
                                 }
                 
                }} type="submit" value="Send" variant="contained" endIcon={<SendIcon/>}>
                  Send
                </Button>
            </form>
        </Box>
    );
};

export default EmailForm;