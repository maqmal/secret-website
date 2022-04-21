import React, {useEffect} from 'react';
import {useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { Frame } from "framer";
import Text from './text'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SoundBar from './soundbar';
import '../App.scss';
import Tilt from 'react-tilt';

import Img7 from '../assets/krti7.JPG'
import Img1 from '../assets/krti1.JPG'
import Img2 from '../assets/krti2.JPG'

export default function Home() {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/main'), [history]);
  document.title = "Special message 💌";
  const [showElement,setShowElement] = React.useState(true)
  const [show2Element,setShow2Element] = React.useState(false)
  useEffect(()=>{
    setTimeout(function() {
      setShowElement(false)

      setShow2Element(true)
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
                <Text textMsg="Nabila - A name that sounds so sweet, so pretty." duration={1} delay={3} className="textAnim"/>
                <Text textMsg="A fitting name for a sweet angel," duration={1.2} delay={9} className="textAnim"/>
                <Text textMsg="that I cherish the most ❤️" duration={2} delay={14} className="textAnim"/>
                <Text textMsg="I realize that a text messages is not enough..." duration={2} delay={19} className="textAnim"/>
                <Text textMsg="To let you know how special you are to me." duration={1} delay={24} className="textAnim"/>
                <Text textMsg="So, I made this for you 😺" duration={1} delay={28} className="textAnim"/>
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
                      {"Well, I want to share you something..."}
                  </Frame>
              </>:
            <>
            
            </>} 
            {
              show2Element?
            /* <div className='image-border'>
              <Tilt className="Tilt" options={{ max : 25 }} style={{width: '30%' }}>
                <img src={Img7} style={{objectFit: 'cover', width:'75%', borderRadius: '2%'}}/>
              </Tilt>
              <ul style={{listStyleType:'none'}}>
                <li><p style={{fontSize:'20px'}}>This is my first photograph that you took :D</p></li>
                <li><p style={{fontSize:'20px'}}>At that time, I still too shy to be get to know you better :( <br/>but I really want to be your friend and go out with you, just the two of us :D</p></li>
                <li><p style={{fontSize:'20px'}}>But it all changed when KRTI happened...</p></li>
              </ul>
            </div> */

            /* <div className='image-border'>
              <Tilt className="Tilt" options={{ max : 25 }} style={{width: '30%' }}>
                <img src={Img1} style={{objectFit: 'cover', width:'95%', borderRadius: '2%'}}/>
              </Tilt>
              <ul style={{listStyleType:'none'}}>
                <li><p style={{fontSize:'20px'}}>You gave me chocolate for the first time here 🥰</p></li>
                <li><p style={{fontSize:'20px'}}>And it was the first time I got chocolate from a girl hehe...</p></li>
                <li><p style={{fontSize:'20px'}}>I almost didn't want to eat the chocolate because <br/>I want to keep it forever, it is soo special to me</p></li>
              </ul>
            </div> */

            <div className='image-border'>
              <Tilt className="Tilt" options={{ max : 25 }} style={{width: '30%' }}>
                <img src={Img2} style={{objectFit: 'cover', width:'75%', borderRadius: '2%'}}/>
              </Tilt>
              <ul style={{listStyleType:'none'}}>
                <li><p style={{fontSize:'20px'}}>Look how beautiful you are 😍</p></li>
                <li><p style={{fontSize:'20px'}}>How lucky I was, able to be with you, be your lover</p></li>
                <li><p style={{fontSize:'20px'}}>Back there, I didn't really care about the competition. <br/>I'm just so happy that finally I can talk with you and walk with you :D</p></li>
              </ul>
            </div>
            :
            <></>
            }
            
            <center><HomeRoundedIcon style={{marginTop:70, fontSize:50, cursor:'pointer', color:'black'}} onClick={handleOnClick}/></center>
            <span><center><SoundBar/></center></span>
            </Frame>
      </Frame>
      
    </>
  );
}
