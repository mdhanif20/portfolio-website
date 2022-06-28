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

const Confortable = () => {
    const classes = useStyle();
    const [skills,setSkills] = useState([]);
    const [familiars,setFamiliars] = useState([]);
    useEffect(()=>{
      fetch("./confortable.JSON")
      .then(res => res.json())
      .then(data => setSkills(data))
   },[]);

   useEffect(()=>{
    fetch("./familiar.JSON")
    .then(res => res.json())
    .then(data => setFamiliars(data))
 },[]);
 console.log(skills)

    return ( 
        <Box sx={{py:{xs:1,sm:8}}}>
        <Typography sx={{color:"#fff",borderBottom:"2px solid #FE5205",width:"175px",mb:3}} variant="h5" gutterBottom component="div">
          CONFORTABLE
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

        <Box sx={{width:{xs:"100%",sm:"90%"}}}>
        <Typography sx={{color:"#fff",borderBottom:"2px solid #FE5205",width:"85px",my:5}} variant="h5" gutterBottom component="div">
          Familiar
        </Typography>
              {
                  familiars.map(familiar=><Box key={familiar.id}>
                    <Typography sx={{color:"#fff"}} variant="h5" gutterBottom>
                      {familiar.name}
                    </Typography>
                    <Box className={classes.skill}>
                    <Slider
                    sx={{color:"#FE5205",height:"5px",mr:2}}
                      size="small"
                      value={familiar.persantage}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                    />
                    <Typography sx={{color:"#fff",marginTop:'-4px'}} variant="h5" gutterBottom component="div">
                    {familiar.persantage}%
                    </Typography>
                  </Box>
                  </Box>)
              }
          </Box>
        </Box>
    );
};

export default Confortable;