import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import ListIcon from '@mui/icons-material/List';
import WorkIcon from '@mui/icons-material/Work';
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import FileOpenIcon from '@mui/icons-material/FileOpen';


const useStyle = makeStyles({
    container:{
        padding:"40px 0px .09px 20px", 
        height:"100vh",
        position: "sticky",
        color:'#fff',
        
    },
    item:{
        display:"flex",
        alignItems:"center",
        margin:"0px 0px 30px 0px",
        padding:'0px',
        cursor:"pointer",
        border:'none',
        background:"transparent"
    },
    icon:{
        marginRight:"6px",
        fontSize:"32px",
        border:'none',
        background:"transparent"
    },
    text:{
        fontWeight:500,
        fontSize:"17px",
        background:"transparent"
    },
    linkDesign:{
        textDecoration:"none",
        color:"#fff"
    },
    containerSmall:{
        padding:"20px 0px", 
        paddingBottom:".09px",
        height:"100vh", 
        position: "sticky",
        color:'#fff',
        top:0,
    },
    textSmall:{
        fontWeight:800,
        border:"2px solid #FE5200",
        padding:"2px 14px",
        borderRadius:"30px",
        backgroundColor:"#fff",
        marginLeft:"-100%",
        opacity:0,
        zIndex:1
    },
    itemSmall:{
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        cursor:"pointer",
        color:"black",
        width:"100%",
        marginBottom:"38px",
        '&:hover $textSmall':{
            marginLeft:"0",
            opacity:1,
            transition:".6s"
        }
    },
    
    iconSmall:{
        marginRight:"6px",
        color:"#fff",
        zIndex:2
    }
})
 


const LeftSideBar = () => {
    const classes = useStyle();

    return (
        
        <Box sx={{display:"flex",position:'fixed',marginTop:"55px", zIndex:1}}>
            <Box sx={{display:{xs:"none",sm:"none",md:"block"}}}>
            <Container style={{borderRight:"2px solid #232222"}} sx={{ bgcolor:"#1E2132",width:"180px",boxShadow:"-4px 1px 10px #101010 !important",borderRadius:"0px",border:"0px"}}
                 className={classes.container}>
             
            <Box style={{border:"none"}}  className={classes.item}>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <Button sx={{  color: 'white', display: 'flex',padding:"6px 0px"}}>
                        <WaterDamageIcon sx={{fontSize:"1.8rem"}} style={{background:"transparent",border:"none"}}  className={classes.icon}/>
                        <span className={classes.text}>Home</span>
                        </Button> 
                    </Link>
                    </Box>   
                    <Box style={{border:"none"}}  className={classes.item}>
                    <Link to="/about" style={{textDecoration:"none"}}>
                        <Button sx={{ color: 'white', display: 'flex',padding:"6px 0px" }}>
                        <PersonIcon   sx={{fontSize:"1.8rem"}} style={{background:"transparent",border:"none"}}  className={classes.icon}/>
                        <span className={classes.text}>About</span>
                        </Button> 
                    </Link>
                    </Box>  
                    
                    <Box style={{border:"none"}}  className={classes.item}>
                    <Link to="/services" style={{textDecoration:"none"}}>  
                        <Button sx={{ color: 'white', display: 'flex',padding:"6px 0px" }}>
                        <ListIcon   sx={{fontSize:"1.8rem"}} style={{background:"transparent",border:"none"}}  className={classes.icon}/>
                        <span className={classes.text}>Services</span>
                        </Button> 
                    </Link>
                    </Box>   
                    <Box style={{border:"none"}}  className={classes.item}>
                        <Link to="/projects" style={{textDecoration:"none"}}>
                            <Button sx={{ color: 'white', display: 'flex' ,padding:"6px 0px"}}>
                            <WorkIcon  sx={{fontSize:"1.8rem"}}  style={{background:"transparent",border:"none"}}  className={classes.icon}/>
                            <span className={classes.text}>Projects</span>
                            </Button> 
                        </Link>
                    </Box>   
                    <Box style={{border:"none"}}  className={classes.item}>
                        <Button href="https://drive.google.com/uc?export=download&id=1052IZZyTJBfWQyAhPYdyHQYxGirjHxBG" sx={{ color: 'white', display: 'flex',padding:"6px 0px" }}>
                        < FileOpenIcon  sx={{fontSize:"1.8rem"}} style={{background:"transparent",border:"none"}}  className={classes.icon}/>
                        <span className={classes.text}>Resume</span>
                        </Button> 
                    </Box>   
                    <Box style={{border:"none"}}  className={classes.item}>
                         <Link to="/contact" style={{textDecoration:"none"}}> 
                        <Button sx={{ color: 'white', display: 'flex',padding:"6px 0px" }}>
                        <ForumIcon  sx={{fontSize:"1.8rem"}}  style={{background:"transparent",border:"none"}}  className={classes.icon}/>
                        <span className={classes.text}>Contact</span>
                        </Button> 
                        </Link>
                    </Box> 
                          
            </Container>
            
            </Box>

            <Box sx={{display:{xs:"block",sm:"block",md:"none"},zIndex:1,boxShadow: 5}}>
                    <Container sx={{ bgcolor:"#1E2132",width:"34px",paddingLeft:"5px",paddingRight:"38px"}} className={classes.containerSmall}>
                        <Box sx={{pt:2}}>
                        <Link className={classes.itemSmall} to="/" style={{textDecoration:"none"}}>
                            <WaterDamageIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Home</Typography>
                        </Link>
                        </Box>
                    
                    <Box >
                    <Link className={classes.itemSmall} to="/about" style={{textDecoration:"none"}}>
                        <PersonIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}} className={classes.textSmall}>About</Typography>
                        </Link>
                    </Box>
                    <Box >
                    <Link className={classes.itemSmall} to="/services" style={{textDecoration:"none"}}>
                        <ListIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}} className={classes.textSmall}>Services</Typography>
                        </Link>
                    </Box>
                    <Box >
                    <Link className={classes.itemSmall} to="/projects" style={{textDecoration:"none"}}>
                        <WorkIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}} className={classes.textSmall}>Project</Typography>
                        </Link>
                    </Box>
                    <Box >
                    <Button  href="https://drive.google.com/uc?export=download&id=1052IZZyTJBfWQyAhPYdyHQYxGirjHxBG" sx={{ color: 'white', display: 'flex',padding:"6px 0px" }}>
                        <Box className={classes.itemSmall}>
                        < FileOpenIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}}  className={classes.textSmall}>Resume</Typography>
                        </Box>
                    </Button>
                    </Box>
                    <Box >
                    <Link className={classes.itemSmall} to="/contact" style={{textDecoration:"none"}}>  
                        <ForumIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}}  className={classes.textSmall}>Contact</Typography>
                        </Link>
                    </Box>
                </Container>
            </Box>
            <Outlet/>
        </Box>
        
        
    );
};

export default LeftSideBar;