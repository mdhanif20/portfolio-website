import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const useStyle = makeStyles({
    project:{
       
    },
    projectHeaderText:{
      textAlign: "center",
      paddingBottom: "60px",
      fontSize: "35px",
      fontWeight: 600
    },
    projectHeaderColor:{
      color:"#FE5200"
    },
    singleProjectButton:{
        fontSize: ".8rem",
        position: "revert",
        backgroundColor: "#1E2132",
        transition:".5s",
        marginTop:"10px",
        color: "#fff",
        fontWeight: 800,
        
        "&:hover":{
            transform: "scale(1.1)",
            backgroundColor: "#FE5200",
            color:"#fff"
        }       
    },
    seeMoreButtonBox:{      
        textAlign: "center",
        marginTop: "46vh",
        color:"#000000"
    },
    moreProjectLink:{
        color: "#1E2132",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight:"600",
    },
    projectDetails:{
        marginRight: "50px",
        position: "revert",
        color:"#1E2132",
        fontWeight: 600
    }

})

const ProjectAll = () => {
    const classes = useStyle();
    return (
       <Container>
         <Typography className={classes.projectHeaderText} variant="button" gutterBottom component="div">
        My Pro<span className={classes.projectHeaderColor}>ject</span>
        </Typography>
            <Grid container>
            
                <Grid xs={12} md={6} sx={{pb:12}}>   
                    <Box 
                    sx={{
                        boxShadow: "-20px -20px 1px 1px #1E2132",
                        width:{xs:"95%",sm:"80%"},
                        height:"95vh",
                        marginLeft:{xs:"5%",sm:"12.5%"}
                    }}
                    >
                    <img src="https://i.ibb.co/RvgqGsr/screenshot-orna-travels-web-app-2021-12-21-04-29-11.png" style={{width:"100%", height:"100%"}} alt=""/>
                    <Box sx={{marginTop:"-51vh",justifyContent: "space-around",display:{xs:"grid",sm:"flex"}}}>
                            <Button href="https://orna-travels.web.app/" target="_blank" className={classes.singleProjectButton} variant="contained">
                                Live Side
                                </Button>
                            <Button href="https://github.com/mdhanif20/travel-agency-client-side" target="_blank" className={classes.singleProjectButton} variant="contained">Cliend Side Code</Button>

                            <Button href="https://github.com/mdhanif20/travel-agency-website" target="_blank" className={classes.singleProjectButton} variant="contained">Server Side Code</Button>
                           
                        </Box>
                        
                    </Box> 
                    <Typography sx={{textAlign:"end"}} variant="button" display="block" gutterBottom>
                      <Button endIcon={<ArrowForwardIosIcon/>} className={classes.projectDetails} href="#text-buttons">See Project Details</Button>
                    </Typography>
                                    
                </Grid>
                
               
                <Grid xs={12} md={6} sx={{pb:12}}>   
                    <Box 
                    sx={{
                        boxShadow: "-20px -20px 1px 1px #1E2132",
                        width:{xs:"95%",sm:"80%"},
                        height:"95vh",
                        marginLeft:{xs:"5%",sm:"12.5%"}
                    }}
                    >
                    <img src="https://i.ibb.co/WGx43c8/screenshot-online-car-shopping-web-app-2021-12-21-04-30-40.png" style={{width:"100%", height:"100%"}} alt=""/>
                    <Box sx={{marginTop:"-51vh",justifyContent: "space-around",display:{xs:"grid",sm:"flex"}}}>
                            <Button href="https://online-car-shopping.web.app/" target="_blank" className={classes.singleProjectButton} variant="contained">
                                Live Side
                                </Button>
                            <Button href="https://github.com/mdhanif20/car-shopping-e-commerce-website" target="_blank" className={classes.singleProjectButton} variant="contained">Cliend Side Code</Button>

                            <Button href="https://github.com/mdhanif20/car-shopping-e-commerce-server-side" target="_blank" className={classes.singleProjectButton} variant="contained">Server Side Code</Button>
                           
                        </Box>
                    </Box>                 
                </Grid>
                
               
                <Grid xs={12} md={6} sx={{pb:12}}>   
                    <Box 
                    sx={{
                        boxShadow: "-20px -20px 1px 1px #1E2132",
                        width:{xs:"95%",sm:"80%"},
                        height:"95vh",
                        marginLeft:{xs:"5%",sm:"12.5%"}
                    }}
                    >
                    <img src="https://i.ibb.co/KhJHRwv/screenshot-sab-a-sanabill-hospital-web-app-2021-12-21-04-27-28.png" style={{width:"100%", height:"100%"}} alt=""/>
                    <Box sx={{marginTop:"-51vh",justifyContent: "space-around",display:{xs:"grid",sm:"flex"}}}>
                            <Button href="https://sab-a-sanabill-hospital.web.app/" target="_blank" className={classes.singleProjectButton} variant="contained">
                                Live Side
                                </Button>
                            <Button href="https://github.com/mdhanif20/hospital-service-related-website" target="_blank" className={classes.singleProjectButton} variant="contained">Cliend Side Code</Button>

                           
                        </Box>
                    </Box>                 
                </Grid>
                
               
                <Grid xs={12} md={6} sx={{pb:3}}>   
                    <Box 
                    >
                    
                    <Box sx={{ textAlign: "center",
                               marginTop:{xs:"1vh",sm:"46vh"} }}>
                        <Button variant="text" sx={{ position: "revert",color:"black"}}  endIcon={<ArrowForwardIosIcon/>} fontSize="small">
                            <Link className={classes.moreProjectLink} to="">See More Project </Link>
                        </Button>
                            
                           
                        </Box>
                    </Box>                 
                </Grid>
           </Grid>
       </Container>
    );
};

export default ProjectAll;