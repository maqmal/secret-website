import React from "react";
import { motion } from "framer-motion";
import move from "lodash-move";

const CARD_COLORS = ["#f0b74f", "#cb7c7a", "#FFBD69", "#E2703A"];
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const wrapperStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};
  
const cardWrapStyle = {
  position: "relative",
  width: "350px",
  height: "220px"
};

const cardStyle = {
  position: "absolute",
  width: "350px",
  height: "220px",
  borderRadius: "8px",
  transformOrigin: "top center",
  listStyle: "none"
};

const cardText = {
  '#f0b74f':
  [`Happy birthday Nabila :) I wish I could say it directly to you while hugging you. I miss you. 
  `, 
  `Semoga semua cita-cita kamu tercapai, and make your parents proud because their sweet baby girl is so amazing!`, `You could've chosen anybody to share
  your life with and I am so grateful that
  you used to choose me`, 'Semangat TA nya']
  ,
  '#cb7c7a':
  [`Semoga semua cita-cita kamu tercapai, and make your parents proud because their sweet baby girl is so amazing!`, `You could've chosen anybody to share
  your life with and I am so grateful that
  you used to choose me`, 'Semangat TA nya', `Happy birthday my sweet angel. I wish I could say it directly to you and hug you.
  `]
  ,
  '#FFBD69':
  [`You could've chosen anybody to share
  your life with and I'm so grateful that
  I was your choice :)`, 
  'Semangat TA nya', `Happy birthday my sweet angel. I wish I could say it directly to you and hug you.
  `, `Semoga semua cita-cita kamu tercapai, and make your parents proud because their sweet baby girl is so amazing!`]
  ,
  '#E2703A':
  ['Semangat ngerjain TA cantiik. Ganbatte! You can do it! Go get it sweet girl! It almost done and tadaaa, graduation :D', `Happy birthday my sweet angel. I wish I could say it directly to you and hug you.
  `, `Semoga semua cita-cita kamu tercapai, and make your parents proud because their sweet baby girl is so amazing!`, `You could've chosen anybody to share
  your life with and I am so grateful that
  you used to choose me`]
}

const CardStack = () => {
  const [cards, setCards] = React.useState(CARD_COLORS);
  const moveToEnd = from => {
    setCards(move(cards, from, cards.length - 1));
  };
  return (
    <div style={wrapperStyle}>
      <ul style={cardWrapStyle}>
        {cards.map((color, index) => {
          const canDrag = index === 0;
          console.log(cards[0])
          return (
            <div>
              <motion.li
              key={color}
              style={{
                ...cardStyle,
                backgroundColor: color,
                cursor: canDrag ? "grab" : "auto"
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: CARD_COLORS.length - index
              }}
              drag={canDrag ? "y" : false}
              dragConstraints={{
                top: 0,
                bottom: 0
              }}
              onDragEnd={() => moveToEnd(index)}
            >
            <center style={{paddingTop:80, paddingLeft:20, paddingRight:20}}>{cardText[cards[0]][index]}</center>
            </motion.li>
            </div>  
          );
        })}
      </ul>
    </div>
  );
};

export default CardStack;
