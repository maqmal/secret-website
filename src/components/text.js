import React from 'react';
import { Frame } from "framer";

export default function Text({textMsg, duration, delay}) {
  document.title = "Special message 💌";
  return (
        <Frame
        center
        background={'white'}
        initial={{ opacity: 0, y:-40}}
        animate={{ 
            opacity: 1,
            y:-30,
        }}
        transition={{ 
            duration: duration, 
            delay: delay,
        }}
        width={"70%"}
        >
            {textMsg}
        </Frame>
  );
}
