import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const useStyle = makeStyles({
    resumeButtom:{
        background:"#FE5205",
        boxShadow: 3,
        fontWeight: 500,
        py:1, borderRadius: 20,
        position: "revert"
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
   },
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
                    src="https://i.ibb.co/4PKRdwW/img1.jpg"
                    alt="" />
                </Box>                   
            </Grid>


            <Grid item sx={{pr:{xs:0,md:2}}} xs={12} md={6}>
                <Box>
                <Typography variant="h5" gutterBottom component="div" sx={{fontSize:"30px",mt:{xs:0,sm:15}}}>
                            Hello, <span style={{color:"#FE5205"}}>I'M Hanif</span>
                </Typography>
                <Typography variant="h4" gutterBottom component="div" sx={{pt:0}}>
                    MERN Stack Devloper
                </Typography>
                </Box>
                <Typography variant="body2" gutterBottom component="div" sx={{pt:1,pb:2,fontSize:"1.1rem"}}>
                Hi, I am Mohammad Hanif. I am from Bangladesh. I have completed my web development course from Programming Hero. I am expert in HTML5, CSS3, Bootstrap 5, JavaScript + ES6, React, React Router, React Bootstrap, Material Ui and comfortable with Node js, Express js, MongoDB, Tailwind CSS, Firebase.
                </Typography>

                <Stack sx={{justifyContent:"start",mt:{xs:1,md:1},pb:20 }} spacing={1} direction="row">
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
                    }} href="https://drive.google.com/uc?export=download&id=1e_Gn1Y03UScQs2C6ijEm0Ki0G1xUqFz9"  variant="contained"> 
                        Get Resume           
                    </Button>

                    <Link style={{textDecoration:"none",color:"#fff"}} to="/contact">
                    <Button sx={{display:{xs:"none",md:"block"},fontSize:"1.1rem",
                    border: "2px solid #fff",
                    boxShadow: 3,
                    fontWeight: 500,
                    position: "revert",
                    padding:"1px , 3px",
                    color:"#fff",
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
                    Hire Me
                    </Button>
                    </Link>

                    <Link to="/contact" style={{textDecoration:"none",color:"#fff",fontSize:'.9rem'}}>
                    <Button  sx={{display:{xs:"block",md:"none"},
                    border: "2px solid #fff",
                    boxShadow: 3,
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    position: "revert",
                    padding:"1px , 3px",
                    borderRadius: 20,
                    color:"#fff",
                   transition: ".4s",
                    '&:hover': {
                    border: "2px solid #fff",
                    borderColor:"#fff",
                     backgroundColor: '#161824',
                     transform: "scale(1.1)" 
                    } 
                    }} 
                    variant="outlined" to="#contactArea"> 
                    Hire Me
                    </Button>
                    </Link>

                </Stack>
            </Grid>
            {/* https://i.ibb.co/sH849xJ/hanif.jpg  */}
            <Grid item  xs={12} md={6} sx={{display:{xs:'none',md:"flex"},justifyContent: 'space-around',color:"#fff",mt:2,mb:8 }}>
                <Box  sx={{ width:{xs:"90%",sm:"67%"},height:{xs:"90%",sm:"80%",marginTop:'50px'}}}>
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: " 50%",
                        padding: 4,
                        borderBottom: "2px solid #fff"
                    }} 
                    src="https://i.ibb.co/4PKRdwW/img1.jpg"
                    alt="" />
                </Box>  
            </Grid>
        </Grid>
    
        </Box>
        
    );
};

export default Slider;