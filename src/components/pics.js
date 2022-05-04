import React, {useEffect, useCallback} from 'react';
import { Frame } from "framer";
import Text from './text'
import '../App.scss';
import Tilt from 'react-tilt';
import { useHistory } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import Img from '../assets/secret-pic.jpg'

export default function Home() {
  document.title = "Special message 💌";
  const [showElement,setShowElement] = React.useState(true)
  const [show2Element,setShow2Element] = React.useState(false)
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/main'), [history]);
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
                <Text textMsg="to let you know how special you are to me." duration={1} delay={24} className="textAnim"/>
                <Text textMsg="So, I made this for you 😺 I love you so much darling" duration={1} delay={28} className="textAnim"/>
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
                      delay: 33
                  }}
                  width={"70%"}
                  >
                      {"Your love is so majestic it hits right in the spot even a doctor can't touch ❤️"}
                  </Frame>
              </>:
            <>
            
            </>} 
            {
              show2Element?
                <div className='image-border'>
                  <Tilt className="Tilt" options={{ max : 25 }} style={{width: '40%' }}>
                    <img src={Img} style={{objectFit: 'cover', width:'88%', borderRadius: '2%'}}/>
                  </Tilt>
                  <ul style={{listStyleType:'none'}}>
                    <li><p style={{fontSize:'20px'}}>Sometimes its hard for me to fall asleep when I'm with you</p></li>
                    <li><p style={{fontSize:'20px'}}>Because reality is finally better than my dreams.</p></li>
                    <li><p style={{fontSize:'20px'}}>I love you so much my dear Nabila Herman. <br/>Don't let your heart confused again. ❤️</p></li>
                  </ul>
                </div>
            :
            <></>
            }
            <center><HomeRoundedIcon style={{marginTop:'70', fontSize:50, cursor:'pointer', color:'grey'}} onClick={handleOnClick}/></center>
            </Frame>
      </Frame>
    </>
  );
}
