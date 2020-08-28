import React from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';



   

export default function WordCard(props){
    return (
        <div>
            {
                 Array.from(props.value).map((c,i) => <CharacterCard value={c} key={i}/>)
            }
        </div>
    )
}