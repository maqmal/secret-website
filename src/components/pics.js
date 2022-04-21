import React, {useEffect} from 'react';
import {useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { Frame } from "framer";
import Text from './text'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SoundBar from './soundbar';
import '../App.scss'

export default function Home() {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/main'), [history]);
  document.title = "Special message 💌";
  const [showElement,setShowElement] = React.useState(true)
  useEffect(()=>{
    setTimeout(function() {
      setShowElement(false)
         }, 40000);
       },
   [])
  return (
    <>
      <Frame
        background={'black'}
        left={0}
        top={0}
        width={"100%"}
        height={"100%"}
        >
          <Frame
            background={'white'}
            center
            animate={{
              width: ['0%', '10%', '30%', '50%', '100%'],
              height: ['0%', '10%', '50%', '50%', '100%'],
              borderRadius: ["5%", "5%", "5%", "5%", "0%"]
            }}
            transition={{
              delay:1.5,
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
            style={{fontSize:50, color:'black'}}
            >
              {showElement?
              <>
                <Text textMsg="Nabila. A name that sounds so sweet, so pretty." duration={1} delay={3} className="textAnim"/>
                <Text textMsg="A fitting name for a sweet angel," duration={1.2} delay={9} className="textAnim"/>
                <Text textMsg="that I cherish the most ❤️" duration={2} delay={14} className="textAnim"/>
                <Text textMsg="I wish that we can hold on together, fix whats broken," duration={2} delay={19} className="textAnim"/>
                <Text textMsg="and continue our journey together." duration={1} delay={24} className="textAnim"/>
                <Frame
                  center
                  background={'white'}
                  initial={{ opacity: 0, y:-40}}
                  animate={{ 
                      opacity: 1,
                      y:-30,
                  }}
                  transition={{ 
                      duration: 2, 
                      delay: 32
                  }}
                  width={"70%"}
                  style={{border:'1px solid black'}}
                  className="textAnim"
                  >
                      {"Let's explore one of my core memory when I'm with you..."}
                  </Frame>
              </>:
            <>
            </>} 
            <div className='image-border'>

            </div>
            <center><HomeRoundedIcon style={{marginTop:70, fontSize:50, cursor:'pointer', color:'black'}} onClick={handleOnClick}/></center>
            <span><center><SoundBar/></center></span>
            </Frame>
      </Frame>
      
    </>
  );
}
