import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Card, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

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
      }
})

const AboutDetails = () => {
    const classes = useStyle();
    return (
        <Box sx={{p:{xs:2,md:3}}}>
              <Typography sx={{ bgcolor:"#1E2132", color:"#fff",fontWeight: 'bold',fontSize: 30}} variant="button" gutterBottom component="div">
               About <span className={classes.contactHeaderColor}>Me</span>
             </Typography>
             
             <Typography variant="subtitle2" sx={{fontSize:"16px"}} gutterBottom component="div">
                            <Typography sx={{mb:"5px"}}>
                            Hi, 
                            </Typography>
                            I am Mohammad Hanif. I am from Dhaka. I am stadied at Bangabandhu Sheikh Mujibur Rahman Science And Technology University department of Food And Agro-process Engineering.
                            <Typography sx={{mt:"10px"}}>
                            I have completed my web development course from Programming Hero. I am expert in HTML5, CSS3, Bootstrap 5, JavaScript + ES6, React, React Router, React Bootstrap, Material Ui and comfortable with Node js, Express js, MongoDB, Tailwind CSS, Firebase.
                            </Typography>
                            <Typography sx={{mt:"10px"}}>
                            My short term goal is to be an expert web developer and my long term goal is to make an IT firm.
                            </Typography>
                           
                        </Typography>
        </Box>
    );
};

export default AboutDetails;