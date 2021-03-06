import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box} from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const MyInfo = () => {
    return (
        <Grid container spacing={2}>
            <Grid sx={{pr:{xs:1,sm:2}}} item xs={12} sm={6}>
                <Box>
                <Typography sx={{fontSize:'18px',py:1}} variant="body1" gutterBottom>
                    Name : <span style={{color:"#c6c5c5"}}>Mohammad Hanif</span>
                </Typography>
                <Typography sx={{fontSize:'18px',py:1}} variant="body1" gutterBottom>
                    Birthday : <span style={{color:"#c6c5c5"}}>12 November 1999</span>
                </Typography>
                <Typography sx={{fontSize:'18px',py:1}} variant="body1" gutterBottom>
                    Age : <span style={{color:"#c6c5c5"}}>22</span>
                </Typography>
                <Typography sx={{fontSize:'18px',py:1}} variant="body1" gutterBottom>
                    City : <span style={{color:"#c6c5c5"}}>Dhaka</span>
                </Typography>
                <Typography sx={{fontSize:'18px',py:1}} variant="body1" gutterBottom>
                Education : <span style={{color:"#c6c5c5"}}> Studied at Bangabandhu Sheikh Mujibur Rahman Science And Technology University, Gopalganj-8100. Department of Food And Agro-process Engineering(2nd year)</span>
                </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Box>
                <Typography sx={{fontSize:'18px',py:1}} variant="body1" gutterBottom>
                    Email : <span style={{color:"#c6c5c5"}}>mdhanif2921@gmail.com</span>
                </Typography>
                <Typography sx={{fontSize:'18px',py:1}} variant="body1" gutterBottom>
                    Phone : <span style={{color:"#c6c5c5"}}>+8801821876351</span>
                </Typography>
                <Typography sx={{fontSize:'18px',py:1}} variant="body1" gutterBottom>
                    Website : <span style={{color:"#c6c5c5"}}> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                </Typography>
                
                </Box>
            </Grid>
          <Box>
          <Stack sx={{justifyContent:"start",mt:{xs:2,md:3},pb:5,pt:3,pl:2 }} spacing={1} direction="row">
                    <Button sx={{fontSize:{xs:".9rem",md:"1.1rem"},px:{xs:1,md:3}, background:"#FE5205",
                    boxShadow: 3,
                    fontWeight: 500,
                    py:1, borderRadius: 20,
                    position: "revert",
                    /* transition: ".4s",
                    '&:hover': {
                    color:"#fff",
                    backgroundColor: '#FE5205',
                    transform: "scale(1.1)"
                    } */
                    }} href="https://drive.google.com/u/0/uc?id=1jQC4ny1KU-hYF2V97a_yrABWZKIZZKdJ&export=download"  variant="contained"> 
                        My Resume           
                    </Button>
                    <Button sx={{display:{xs:"none",md:"block"},fontSize:"1.1rem",
                    border: "2px solid #fff",
                    boxShadow: 3,
                    fontWeight: 500,
                    position: "revert",
                    padding:"1px , 3px",
                    borderRadius: 20,
                    /* transition: ".4s",
                    '&:hover': {
                    border: "2px solid #fff",
                    borderColor:"#fff",
                     backgroundColor: '#161824',
                     transform: "scale(1.1)"
                } */
                }} 
                    variant="outlined" to="#contactArea"> 
                    <a style={{textDecoration:"none",color:"#fff",
                     
                }} href="#contactArea">Hire Me</a>
                    </Button>
                    <Button  sx={{display:{xs:"block",md:"none"},
                    border: "2px solid #fff",
                    boxShadow: 3,
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    position: "revert",
                    padding:"1px , 3px",
                    borderRadius: 20,
                   /*  transition: ".4s",
                    '&:hover': {
                    border: "2px solid #fff",
                    borderColor:"#fff",
                     backgroundColor: '#161824',
                     transform: "scale(1.1)"
                }   */  
                }} 
                    variant="outlined" to="#contactArea"> 
                    <a style={{textDecoration:"none",color:"#fff",fontSize:'.9rem'}} href="#contactArea">Hire Me</a>
                    </Button>
                    
                </Stack>
          </Box>
      </Grid>
    );
};

export default MyInfo;