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
        
            <Box  className={classes.scrollBar} sx={{p:4,bgcolor:"#1E2132",color:"#fff"}}>
            <Grid container>
            <Grid item xs={12} md={6} className={classes.imageArea}  sx={{ display:{xs:'flex',md:"none"} ,
            justifyContent: 'space-around',
            color:"#fff",
            mt:2,
            mb:2}}>
                <Box  sx={{ width:{xs:"90%",sm:"100%"},height:{xs:"90%",sm:"100%"}}}>
                <img
                className={classes.sliderImageForLittle}
                    style={{
                        width: "90%",
                        height: "90%",
                        borderRadius: " 5%",
                        padding: 4,
                        borderBottom: "2px solid #fff"
                    }} 
                    src="https://i.ibb.co/tw75pc6B/Mohammad-hanif.png"
                    alt="" />
                </Box>                   
            </Grid>


            <Grid item sx={{pr:{xs:0,md:2}}} xs={12} md={6}>
                
                <Typography variant="body2" gutterBottom component="div" sx={{pt:1,pb:2,fontSize:"1.1rem", textAlign:'justify'}}>
                 
                  Hi, I am <span style={{color:"#FE5205", fontSize:"25px"}}>Mohammad Hanif</span>, a passionate and dedicated Food Engineering graduate from Gopalganj Science and Technology University (GSTU), Bangladesh, holding a CGPA of 3.72 out of 4.00. Through my academic studies and practical training, I have built a solid foundation in food quality control, safety management, and microbiological analysis. In addition to my core expertise, I have developed strong skills in data analysis using Python and full-stack web development through the MERN Stack. I aim to apply my technical, academic, and research knowledge to enhance productivity, ensure quality, and promote the development of safe, innovative, and sustainable food systems.
                <br/> I have showcased my previous work, experiences, education, skills, certifications, and training programs on this website. Please explore the sections using the left sidebar to navigate through different pages and learn more about me. You can also download my CV for a detailed overview of my academic and professional background.
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
                    }} href="https://drive.google.com/uc?export=download&id=1rE5ZCp0BnEED4J8SknS_US412kgaiHOB"  variant="contained"> 
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

            <Grid item  xs={12} md={6} sx={{display:{xs:'none',md:"flex"},justifyContent: 'space-around',color:"#fff",mt:2,mb:8 }}>
                <Box  sx={{ width:{xs:"90%",sm:"67%"},height:{xs:"90%",sm:"80%"}}}>
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: " 5%",
                        padding: 1,
                        borderBottom: "2px solid #fff"
                    }} 
                    src="https://i.ibb.co/tw75pc6B/Mohammad-hanif.png"
                    alt="" />
                </Box>  
            </Grid>
        </Grid>
    
        </Box>
        
    );
};

export default Slider;