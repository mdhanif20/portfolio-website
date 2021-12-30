import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Card, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailForm from './EmailForm';

const useStyle = makeStyles({
    contactHeader:{
        textAlign: "center",
        paddingBottom: "40px",
        paddingTop: "20px",
        fontSize: "35px",
        fontWeight: 600
      },
      contactHeaderColor:{
        color:"#FE5200"
      },
      
      contactDetails:{
       
      },
      singleInfo:{
        fontSize: "22px",
        opacity: ".7"
      },
      emailTextarea:{
        border: "2px solid gray",
        borderRadius: "5px"
    }
})

const Contact = () => {
    const classes = useStyle();
    return (
        <Container id="contactArea">
                 <Typography className={classes.contactHeader} variant="button" gutterBottom component="div">
                    Contact <span className={classes.contactHeaderColor}>Me</span>
                </Typography>
            <Box>
                <Card sx={{display:{xs:"grid",sm:"flex"}}}>
                    
                        <Grid className={classes.contactImage} xs={12} md={6}>
                           <Box sx={{p:5}} className={classes.contactDetails}>
                           <Typography className={classes.singleInfo} gutterBottom component="div">
                                Name: Mohammad Hanif         
                            </Typography>
                           <Typography className={classes.singleInfo} gutterBottom component="div">
                                Phone: +8801609015767         
                            </Typography>
                           <Typography className={classes.singleInfo} gutterBottom component="div">
                                Email: mdhanif115825@gmail.com       
                            </Typography>
                           <Typography className={classes.singleInfo} gutterBottom component="div">
                                Address: Kanchannagar, Chandanish, Chittagong, Bangladesh        
                            </Typography>
                            <span>
                                <Button href="#" sx={{ position: "revert"}} target="_blank"><EmailIcon sx={{ color: "#CE4B3E", fontSize:"30px" }}/></Button>

                                <Button href="https://www.facebook.com/profile.php?id=100055606685759" sx={{ position: "revert"}} target="_blank">
                                <FacebookIcon sx={{color: "#4064AC", fontSize:"30px" }}/>
                                </Button>

                                <Button href="https://www.facebook.com/profile.php?id=100055606685759" sx={{ position: "revert"}} target="_blank">
                                <TwitterIcon sx={{color: "#1C9CEA", fontSize:"30px", position: "revert" }}/>
                                </Button>

                                <Button href="https://www.linkedin.com/in/mohammad-hanif-6a61b920b/" sx={{ position: "revert"}} target="_blank">
                                <LinkedInIcon sx={{color: "#0C61BF", fontSize:"30px",p:1 }}/>
                                </Button>
                                </span>
                           </Box>
                        </Grid>
                        <Grid sx={{p:2}} xs={12} md={6}>
                            <EmailForm></EmailForm>
                         
                        </Grid>
                    
                </Card>
            </Box>
        </Container>
    );
};

export default Contact;