import React from 'react';
import { Frame, Stack, Scroll } from "framer";
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
      <Frame 
        background={'black'}
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
            <Frame variants={item} background="black" width={700} height={10} radius="5%" style={{color:'white', fontSize:70, verticalAlign:'center'}}><span style={{color:'#E0C097'}}>A Little Birthday Present From Me</span></Frame>
          </Stack>

          <Frame top={300} left={270} width={1150} height={150} background="black" variants={item} >
            <Stack
              center
              distribution="space-evenly"
              width={1100} height={300}
              padding={20}
              >
              {/* Stack animation */}
              <Frame background="black" width={550} height={130}>
                <Frame background="#B85C38" size={100}  center initial={{ x:0, y:0, borderRadius:'50%' }} animate={{ x:120, y:0, borderRadius:'45%' }} transition={{ delay:1 }} style={{fontSize:'250x', fontWeight:'bold'}}>Only</Frame>
                <Frame background="#ECDBBA" className='ubutton'
                size={100} center initial={{ x:0, y:0, borderRadius:'50%' }} 
                animate={{ x:0, y:0, borderRadius:'45%' }} transition={{ delay:1 }} 
                style={{fontSize:'20px', fontWeight:'bold'}}
                onClick={handleOnClick}>You</Frame>
                <Frame background="#B85C38" size={100} center initial={{ x:0, y:0, borderRadius:'50%' }} animate={{ x:-120, y:0, borderRadius:'45%' }} transition={{ delay:1 }} style={{fontSize:'20px', fontWeight:'bold'}}>To</Frame>
              </Frame>
            </Stack>
          </Frame>

            <Frame top={140} left={630} background={'transparent'} variants={item}>
              <CardStack/>
            </Frame>

      </Frame>
  );
}
