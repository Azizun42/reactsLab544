import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "Hello";
function App() {
  var word = "";
  var rand = Math.floor(Math.random()*10)+1;
  if(rand == 1) {
    word = "armadillo";
  }
  else if(rand == 2){
    word = "opossum";   
  }
  else if(rand == 3){
    word = "zebrafish";
  }
  else if(rand == 4){
    word = "penguins";
  }
  else if(rand == 5){
    word = "ostriches";
  }
  else if(rand == 6){
    word = "Gentleman";
  }
  else if(rand == 7){
    word = "seahorses";
  }
  else if(rand == 8){
    word = "tortoises";
  }
  else if(rand == 9){
    word = "earthworms";
  }
  else if(rand == 10){
    word = "leeches";
  }

  return (
    <body>
      <center><br></br><h1>Welcome To Words Puzzle!</h1><br></br></center>
      <h2>Show your skill</h2>
      <h3>Words about animal</h3>
      <div>
        <WordCard value={word}/>
      </div> 
      <span className="Btn"> 
             <button className="button btn1" onClick={() => answer(word)}>Give up</button>
             <button className="button btn2"><a href="http://localhost:3000/" >Next word</a></button>
      </span>
    </body>
  );
}

export default App;
function answer(word){
  alert("The answer is "+word)
}
