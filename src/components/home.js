import React from 'react';
import {useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { Frame } from "framer";

export default function Home() {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/main'), [history]);
  return (
      <Frame 
        background={'#0f0f1a'}
        left={0}
        top={0}
        width={"100%"}
        height={"100%"}
        transition={{ 
          duration: 5, 
          delay:3.5,
        }}
        >
          <Frame
            background={'black'}
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
            style={{fontSize:50, color:'white'}}
            onClick={handleOnClick}
            >
              <Frame
                center
                background={'black'}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.5, delay:3.5 }}
                width={"120%"}
                >
                  Happy Birthday Nabila Cantik
              </Frame>
            </Frame>
      </Frame>
  );
}
