import React from 'react';
import {useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { Frame } from "framer";

export default function Pics2() {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/iagly'), [history]);
  document.title = "Special message 💌";
  return (
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
              <Frame
                center
                background={'white'}
                initial={{ opacity: 0}}
                animate={{ 
                  opacity: 1
                }}
                transition={{ 
                  duration: 2, 
                  delay:3.5,
                }}
                width={"120%"}
                onClick={handleOnClick}
                >
                  Those two year of us really are 
              </Frame>
            </Frame>
      </Frame>
  );
}
