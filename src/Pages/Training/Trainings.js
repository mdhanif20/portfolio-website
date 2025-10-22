import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Training from './Training';
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

const Trainings = () => {
    const classes = useStyle();
    const [trainings,setTrainings]= useState([]);
    useEffect(()=>{
        fetch("./training.JSON") 
        .then(res=>res.json())
        .then(data => setTrainings(data))
    },[]);

    return (
        <Box style={{borderRadius:"0px",border:0,margin:0}} className={classes.scrollBar} sx={{background:"#1E2132"}}>

            <Box sx={{p:2}}>
                <h4 style={{textAlign:"center",fontSize:'2rem',fontWeight:"600",paddingBottom:'20px',color:"#ffffffff"}}>Training And Certification Courses</h4>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                    {
                        trainings.map(training=><Training
                            key={training.id}
                            data={training}
                            >
                        </Training>)
                    }
                        
                    </Grid>
                </Box>
            </Box>
            
        </Box>
    );
};

export default Trainings;