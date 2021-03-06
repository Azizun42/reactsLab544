import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

var status;
var result;


const prepareStateFromWord = given_word =>{
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attemp: 1,
        guess : '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => { 
        console.log(`${c} has been activated.`) 
        
        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                status = "Congratulations !! You figure out";
                setState({...state, completed : true})
            }else{
                console.log('reset, next attempt')
                setState({...state, guess: '', attemp: state.attemp +1})
                status='Try Again !!';
            }
        }
    }
    
    
    return (
        <div>
            {
                state.chars.map((c,i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attemp}/>
                )
            }
            <div className="activeText1">{result}</div>
            <div className="activeText2">{status}</div>
        </div>
    )
}