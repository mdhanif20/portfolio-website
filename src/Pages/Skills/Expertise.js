import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Slider from '@mui/material/Slider';


const useStyle = makeStyles({
    skill:{
        display:'flex',
        alignItems:"flex-start"
      }
})

const Expertise = () => {
    const classes = useStyle();
    const [skills,setSkills] = useState([]);
    useEffect(()=>{
      fetch("./expertise.JSON")
      .then(res => res.json())
      .then(data => setSkills(data))
   },[]);
    return (
        <Box sx={{py:5}}>
        <Typography sx={{color:"#fff",borderBottom:"2px solid #FE5205",width:"115px"}} variant="h4" gutterBottom component="div">
          SKILLS
        </Typography>
        <Typography sx={{color:"#fff",borderBottom:"2px solid #FE5205",width:"90px",marginTop:"-8px",mb:7}} variant="h4" gutterBottom component="div">
        </Typography>
        <Typography sx={{color:"#fff",borderBottom:"2px solid #FE5205",width:"135px",my:3}} variant="h5" gutterBottom component="div">
          EXPERTISE
        </Typography>
        
        <Box sx={{width:{xs:"100%",sm:"90%"}}}>
          {
            skills.map(skill=> <Box key={skill.id}>
            <Typography sx={{color:"#fff"}} variant="h5" gutterBottom>
              {skill.name}
            </Typography>
            <Box className={classes.skill}>
            <Slider
            sx={{color:"#FE5205",height:"5px",mr:2}}
              size="small"
              value={skill.persantage}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
            <Typography sx={{color:"#fff",marginTop:'-4px'}} variant="h5" gutterBottom component="div">
            {skill.persantage}%
            </Typography>
          </Box>
          </Box>)
          }  
        </Box>
        </Box>
    );
};

export default Expertise;