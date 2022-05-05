import React from 'react';
import { Frame, Stack } from "framer";
import '../App.scss';
import CardStack from './cardstack';
import { useHistory } from 'react-router-dom';
import {useCallback} from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 }
}
export default function Intro() {
  document.title = "Nabila's Birthday!";
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/iagly'), [history]);
  return (
    <>
      <Frame 
        background={'#694E4E'}
        variants={container}
        initial="hidden"
        animate="show"
        left={0}
        top={0}
        width={"100%"}
        height={"100%"}
        >
          <Stack
            style={{ fontWeight: 'bold', textAlign:'center'}}
            size={300}
            gap={40}
            paddingTop={100}
            paddingLeft={500}
            alignment="start"
            variants={container}
            initial="hidden"
            animate="show"
            >
            <Frame variants={item} background="#694E4E" width={700} height={10} radius="5%" style={{color:'white', fontSize:70, verticalAlign:'center'}}><span style={{color:'#F3C5C5'}}>My Little Birthday Present For You</span></Frame>
          </Stack>

          <Frame top={300} left={270} width={1150} height={150} background="#694E4E" variants={item} >
            <Stack
              center
              distribution="space-evenly"
              width={1100} height={300}
              padding={20}
              >
              {/* Stack animation */}
              <Frame background="#694E4E" width={550} height={130}>
                <Frame background="#C1A3A3" size={100}  center initial={{ x:0, y:0, borderRadius:'50%' }} animate={{ x:120, y:0, borderRadius:'45%' }} transition={{ delay:1 }} style={{fontSize:'35px', fontWeight:'bold'}}>❤️</Frame>
                <Frame background="#ECDBBA" className='ubutton'
                size={100} center initial={{ x:0, y:0, borderRadius:'50%' }} 
                animate={{ x:0, y:0, borderRadius:'45%' }} transition={{ delay:1 }} 
                style={{fontSize:'35px', fontWeight:'bold'}}
                onClick={handleOnClick}>🎁</Frame>
                <Frame background="#C1A3A3" size={100} center initial={{ x:0, y:0, borderRadius:'50%' }} animate={{ x:-120, y:0, borderRadius:'45%' }} transition={{ delay:1 }} style={{fontSize:'35px', fontWeight:'bold'}}>❤️</Frame>
              </Frame>
            </Stack>
          </Frame>

            <Frame top={133} left={630} background={'transparent'} variants={item}>
              <CardStack/>
            </Frame>

      </Frame>
      
      </>
  );
}
