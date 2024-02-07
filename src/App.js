import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [startingLetters, setStartingLetters] = useState("taa");
  const [inputText, setInputText] = useState("");

  const [isClick, setIsClick] = useState(false);

  function openinNew() {
    let chars = startingLetters.split("");
    
    if (chars[2] !== 'z') {
      chars[2] = String.fromCharCode(chars[2].charCodeAt(0) + 1);
    }else 
    if(chars[2] == 'z'){
      console.log("inside")
      chars[1] = String.fromCharCode(chars[1].charCodeAt(0) + 1);
      chars[2] = "a";
    }
    else {
      return; // We reached 'tzz', don't update further
    }
    setStartingLetters(chars.join(""));
  }

function changeText(){
  if(inputText.length==3 && isClick){
    setIsClick(false);
    setStartingLetters(inputText);
    console.log(inputText," ",setInputText)
  }
}

  useEffect(() => {
    window.open(`http://www.${startingLetters}.com`, "_blank");
  }, [startingLetters]);

  return (
    <div className="App">
      <input value={inputText} onChange={(e)=>setInputText(e.target.value)}></input>
      <input type='button' value={"Submit"} onClick={()=>{setIsClick(true);changeText()}}></input>
      <button onClick={openinNew}>{startingLetters}</button>
      
    </div>
  );
}

export default App;
