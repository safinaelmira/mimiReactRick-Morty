import React from 'react';
import {Route} from 'react-router-dom';
import Exactitem from '../exact-item/exact-item';
import List from '../list/list';
import {Consumer} from '../context/context';

function CharactersPage(pagename, methodforAll, methodforOne, li, history){

    const editURL = (id) => {
        history.push(`${id}`);
    }

    return(
        <Consumer>
            {(rmservice) => {
                return(
                    <div className="mt-3">
                        <Route path={`/${pagename}/`} exact>
                            <List 
                                method={rmservice[methodforAll]}
                                editURL={editURL}/>
                        </Route>
                        <Route 
                            path={`/${pagename}/:id`} 
                            render={({match}) => <Exactitem id={match.params.id} method={rmservice[methodforOne]}>
                                {li.map(item => item)}
                            </Exactitem>} 
                            exact
                        />
                    </div>
                )
            }}
        </Consumer>
    )
}

export default CharactersPage;