import React, {useState} from "react";
import { useHistory } from 'react-router-dom';

export default function Password ({setActive}) {

  const history = useHistory();

 var passArr = ['','','','','','']
 const clickEvent = (event, last)=>{
    const { value, name } = event.target
    var indexArr = parseInt(last.split('-')[1])-2
    if(value.length){
      if(last!=='digit-7'){
        document.getElementById(last).focus();
      }
      passArr[indexArr]=value;
    }
    if(passArr[0]==1&&passArr[1]==9&&passArr[2]==1&&passArr[3]==0&&passArr[4]==1&&passArr[5]==9){
      setActive(true)
      history.push('/wish-card');
    }
  }

    return (
      <div className="pass-page">
      <div className="prompt">
        Riddle me this. it is floating, yet there is a market. But when is it?
      </div>
      <center>
        <form method="get" className="digit-group" data-group-name="digits" data-autosubmit="false" autoComplete="off">
          <input type="text" id="digit-1" name="digit-1" data-next="digit-2" maxLength="1" onChange={(e)=>clickEvent(e,'digit-2')}onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}/>
          <span className="splitter">&ndash;</span>
          <input type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" maxLength="1" onChange={(e)=>clickEvent(e,'digit-3')}onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}/>
          <span className="splitter">&ndash;</span>
          <input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" maxLength="1" onChange={(e)=>clickEvent(e,'digit-4')}onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}/>
          <span className="splitter">&ndash;</span>
          <input type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" maxLength="1" onChange={(e)=>clickEvent(e,'digit-5')}onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}/>
          <span className="splitter">&ndash;</span>
          <input type="text" id="digit-5" name="digit-5" data-next="digit-6" data-previous="digit-4" maxLength="1" onChange={(e)=>clickEvent(e,'digit-6')}onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}/>
          <span className="splitter">&ndash;</span>
          <input type="text" id="digit-6" name="digit-6" data-previous="digit-5" maxLength="1" onChange={(e)=>clickEvent(e,'digit-7')}onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}/>
        </form>
      </center>
      
    </div>

    );
}