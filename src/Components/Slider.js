import { Box, Container} from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const Slider = () => {
    return (
        <Box>
        <Box  sx={{ bgcolor: '#1E2132', pt:10 }}>
                <Container>  
                    <Grid container >

                    <Grid item xs={12} md={6} sx={{display:{xs:'flex',md:"none"} ,justifyContent: 'space-around',color:"#fff",mt:2,mb:4 }}>
                            <Box  sx={{ width:{xs:"90%",sm:"70%"},height:{xs:"90%",sm:"85%"}}}>
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
                        <Grid item sx={{color:"#fff",textAlign:"center"}} xs={12} md={6}>
                        <Typography variant="h5" gutterBottom component="div" sx={{mt:{xs:0,sm:17}}}>
                            Hello,I'M Hanif
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div" sx={{pt:1}}>
                            MERN Stack Devloper
                        </Typography>
                        <Typography variant="body2" gutterBottom component="div" sx={{pt:1,pb:2}}>
                            Knack of building applications with front and back end operations
                        </Typography>
                        <Stack sx={{justifyContent:"center",mb:{xs:10,md:0} }} spacing={2} direction="row">

                            <Button sx={{bgcolor:"#FE2500",
                            fontSize: "1.2rem",
                            boxShadow: 3,
                            fontWeight: 500,
                            py:1,px:3, borderRadius: 20,
                            transition: ".4s",
                            '&:hover': {
                                color:"#fff",
                                backgroundColor: '#CB0001',
                                transform: "scale(1.1)"
                              }
                        }} variant="contained">
                                Get Resume
                            </Button>


                            <Button 
                             sx={{
                                border: 2,
                                boxShadow: 3,
                             fontSize: "1.2rem",
                             fontWeight: 500,
                             color:"#fff",
                             py:1,px:3, borderRadius: 20,
                             transition: ".4s",
                             '&:hover': {
                                border: 2,
                                borderColor:"#fff",
                                 backgroundColor: '#161824',
                                 transform: "scale(1.1)"
                               }}}
                            variant="outlined">Hire Me</Button>
                        </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{display:{xs:'none',md:"flex"},justifyContent: 'space-around',color:"#fff",mt:4,mb:8 }}>
                            <Box  sx={{ width:{xs:"90%",sm:"70%"},height:{xs:"90%",sm:"85%"}}}>
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
                    
                </Container>
                <img className='footerImg' style={{width:"100%",marginTop:"-150px",marginBottom:"-10px"}} src="https://i.ibb.co/Kbc0q6Z/sliderfooter.png" alt="" />
        </Box>
        </Box>
        
    );
};

export default Slider;