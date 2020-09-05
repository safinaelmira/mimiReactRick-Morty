import React from 'react';
import Li from '../exact-item/li';
import CharactersPage from '../pages/characterpage';
import {withRouter} from 'react-router-dom';

function Characters({history}){

    const characterspage = CharactersPage(
        'characters',
        'getAllCharacters',
        'getCharacter',
        [
            <Li label="Status: " option="status" key="status"/>,
            <Li label="Species: " option="species" key="species"/>,
            <Li label="Gender: " option="gender" key="gender"/>,
            <Li label="Creation data: " option="created" key="created"/>
        ],
        history
    );

    return(
        <>
            {characterspage}
        </>
    )
}

export default withRouter(Characters);


