import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Card, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import AboutDetails from './AboutDetails';


const useStyle = makeStyles({
    contactHeader:{
        paddingBottom: "5px",
        fontSize: "30px",
        fontWeight: 600
      },
      contactHeaderColor:{
        color:"#FE5200"
      },
      aboutImage:{
        padding:"10px"
      },
      imageText:{
        
      }
})

const About = () => {
    const classes = useStyle();
    return (
        <Container sx={{margin: "100px auto"}} id="about">
                 
            <Box>
                <Card sx={{display:{xs:"grid",sm:"flex"},borderRadius:0, bgcolor:"#1E2132", color:"#fff",boxShadow:3}}>
                       
                          <Grid  className={classes.aboutImage} xs={12} md={3}>
                            <Box sx={{width:"96%"}}>
                            <img style={{width:"100%",borderRadius:"24px",padding:"5px",border:"2px solid #FE5200"}} src="https://i.ibb.co/sH849xJ/hanif.jpg" alt="" />
                            </Box>
                            
                            <Typography variant="button"  sx={{textAlign:"center",fontSize:"20px",fontFamily: "'Luxurious Script', cursive"}} gutterBottom component="div">
                              Mohammad Hanif
                          </Typography>
                          </Grid>
                          <Grid sx={{pb:2,pl:{xs:0,md:5}}} xs={12} md={9}>
                           <AboutDetails />
                          </Grid>
                        
                    
                </Card>
            </Box>
        </Container>
    );
};


export default About;