import React from 'react';
import { Box, Container} from '@mui/material';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const useStyle = makeStyles({
    resumeButtom:{
        background:"#FE5205",
        boxShadow: 3,
        fontWeight: 500,
        py:1, borderRadius: 20,
        position: "revert",
       /*  transition: ".4s",
        '&:hover': {
                    color:"#fff",
                    backgroundColor: '#CB0001',
                    transform: "scale(1.1)"
                    } */
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
    hiremeButtom:{
        border: "2px solid #fff",
        boxShadow: 3,
     fontSize: "1.2rem",
     fontWeight: 500,
     position: "revert",
     padding:"1px , 3px",
    borderRadius: 20,
   /*   transition: ".4s",
     
     '&:hover': {
        border: "2px solid #fff",
        borderColor:"#fff",
         backgroundColor: '#161824',
         transform: "scale(1.1)"
    } */},
    hiremeAncor:{
        textDecoration:"none",
        color:"#fff",
    }
    
}
)

const Slider = () => {
    const classes = useStyle();
    return (
        
            <Box  className={classes.scrollBar} sx={{p:5,bgcolor:"#1E2132",color:"#fff"}}>
            <Grid container>
            <Grid item xs={12} md={6} className={classes.imageArea}  sx={{ display:{xs:'flex',md:"none"} ,
            justifyContent: 'space-around',
            color:"#fff",
            mt:4,
            mb:4}}>
                <Box  sx={{ width:{xs:"90%",sm:"100%"},height:{xs:"90%",sm:"100%"}}}>
                <img
                className={classes.sliderImageForLittle}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: " 50%",
                        padding: 4,
                        borderBottom: "2px solid #fff"
                    }} 
                    src="https://i.ibb.co/sH849xJ/hanif.jpg"
                    alt="" />
                </Box>                   
            </Grid>


            <Grid item sx={{pr:{xs:0,md:2}}} xs={12} md={6}>
                <Box>
                <Typography variant="h5" gutterBottom component="div" sx={{fontSize:"30px",mt:{xs:0,sm:15}}}>
                            Hello, <span style={{color:"#FE5205"}}>I'M Hanif</span>
                </Typography>
                <Typography variant="h4" gutterBottom component="div" sx={{pt:1}}>
                    MERN Stack Devloper
                </Typography>
                </Box>
                <Typography variant="body2" gutterBottom component="div" sx={{pt:1,pb:2}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veniam consequatur debitis numquam nobis voluptatibus in magnam fuga modi voluptatem.
                </Typography>

                <Stack sx={{justifyContent:"start",mt:{xs:2,md:3},pb:20 }} spacing={1} direction="row">
                    <Button sx={{fontSize:{xs:".9rem",md:"1.1rem"},px:{xs:1,md:3}, background:"#FE5205",
                    boxShadow: 3,
                    fontWeight: 500,
                    py:1, borderRadius: 20,
                    position: "revert",
                    transition: ".4s",
                    '&:hover': {
                    color:"#fff",
                    backgroundColor: '#FE5205',
                    transform: "scale(1.1)"
                    } 
                    }} href="https://drive.google.com/u/0/uc?id=1jQC4ny1KU-hYF2V97a_yrABWZKIZZKdJ&export=download"  variant="contained"> 
                        Get Resume           
                    </Button>
                    <Button sx={{display:{xs:"none",md:"block"},fontSize:"1.1rem",
                    border: "2px solid #fff",
                    boxShadow: 3,
                    fontWeight: 500,
                    position: "revert",
                    padding:"1px , 3px",
                    borderRadius: 20,
                     transition: ".4s",
                    '&:hover': {
                    border: "2px solid #fff",
                    borderColor:"#fff",
                     backgroundColor: '#161824',
                     transform: "scale(1.1)" 
                } 
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
                   transition: ".4s",
                    '&:hover': {
                    border: "2px solid #fff",
                    borderColor:"#fff",
                     backgroundColor: '#161824',
                     transform: "scale(1.1)" 
                } 
                }} 
                    variant="outlined" to="#contactArea"> 
                    <a style={{textDecoration:"none",color:"#fff",fontSize:'.9rem'}} href="#contactArea">Hire Me</a>
                    </Button>
                    
                </Stack>
            </Grid>
            <Grid item  xs={12} md={6} sx={{display:{xs:'none',md:"flex"},justifyContent: 'space-around',color:"#fff",mt:2,mb:8 }}>
                <Box  sx={{ width:{xs:"90%",sm:"70%"},height:{xs:"90%",sm:"85%",marginTop:'50px'}}}>
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: " 50%",
                        padding: 4,
                        borderBottom: "2px solid #fff"
                    }} 
                    src="https://i.ibb.co/sH849xJ/hanif.jpg"
                    alt="" />
                </Box>  
            </Grid>
        </Grid>
    
        </Box>
        
    );
};

export default Slider;