import React from 'react'
import {Stack , Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import Loader from './Loader';

const Videos = ({ videos,direction }) => {    //videos are coming from props
  if(!videos?.length) return <Loader />;
  return (
   <Stack direction ={direction || "row" } flexWrap = "wrap" justifyContent= "start" gap ={2}>
       {videos.map((item,idx) => (
        <Box key={idx}>
         {item.id.videoId && <VideoCard video={item}/>} 
             {/* if there is videoid then we render video card */}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
             {/* if there is channelid then we render channel card */}
        </Box>
      
      ))}
        
        </Stack>
        )
      }
    

export default Videos
