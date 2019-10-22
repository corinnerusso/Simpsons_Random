import React from 'react';


function RandomSimpsons({perso}){
    return (
        <div >
            <img
            src={perso.image} alt={perso.character}
            />
            <ul>
                <li>
                    name : {perso.character}
                </li>
                <li>
                    quote : {perso.quote}
                </li>
            </ul>
        </div>
    );
};


export default RandomSimpsons;