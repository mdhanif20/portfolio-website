import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import AboutDetails from './AboutDetails';
import Expertise from './../Skills/Expertise';
import Confortable from './../Skills/Confortable';
import MyInfo from './MyInfo';

const useStyle = makeStyles({
    contactHeader:{
        paddingBottom: "5px",
        fontSize: "30px",
        fontWeight: 600
      },
    skill:{
      display:'flex',
      alignItems:"flex-start"
    },
    scrollBar:{
        overflow:"scroll",
        height:"100vh",
        '&::-webkit-scrollbar': {
            width: '3px',
            padding:"20px"
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#1E2131',
            outline: '2px solid #BDBDBD',
            borderRadius: "5px"
          }
        
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
      <Box>
         <Container  className={classes.scrollBar} sx={{bgcolor:"#1E2132",pt:10}} id="about"> 
              <AboutDetails/>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                  <Expertise></Expertise>
                </Grid>
                <Grid item xs={12} sm={6} >
                  <Confortable></Confortable>
                </Grid>
              </Grid>
              <Box sx={{color:"#fff",pt:5,pb:15}}>
              <Typography sx={{borderBottom:"2px solid #FE5205",width:"120px"}} variant="h6" gutterBottom component="div">
                MY DETAILS
              </Typography>
              <Typography sx={{color:"#fff",borderBottom:"2px solid #FE5205",width:"90px",marginTop:"0px",mb:7}} variant="h4" gutterBottom component="div">
            </Typography>
                <MyInfo></MyInfo>
              </Box>
        </Container>
      </Box>
       
    );
};


export default About;