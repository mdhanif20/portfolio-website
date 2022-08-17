import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Project from './Project';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
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
        
    }
})

const Projects = () => {
    const classes = useStyle();
    const [themes,setThemes]= useState([]);
    useEffect(()=>{
        fetch("./themes.JSON") 
        .then(res=>res.json())
        .then(data => setThemes(data))
    },[]);

    return (
        <Box style={{borderRadius:"0px",border:0,margin:0}} className={classes.scrollBar} sx={{background:"#1E2132"}}>

            <Box sx={{p:2}}>
                <h4 style={{textAlign:"center",fontSize:'2.5rem',fontWeight:"400",paddingBottom:'20px',color:"#fff"}}>My Website</h4>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                    {
                        themes.map(theme=><Project
                            key={theme.id}
                            data={theme}
                            >
                        </Project>)
                    }
                        
                    </Grid>
                </Box>
            </Box>
            
        </Box>
    );
};

export default Projects;