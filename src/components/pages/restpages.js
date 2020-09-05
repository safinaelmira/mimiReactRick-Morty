import React from 'react';
import {Route} from 'react-router-dom';
import Exactitem from '../exact-item/exact-item';
import List from '../list/list';
import Row from  '../row/row';
import {Consumer} from '../context/context';

function RestPage(pagename, methodforAll, methodforOne, li, history){

    const editURL = (id) => {
        history.push(`${id}`);
    }

    const left = <Consumer>
                    {(rmservice) => {
                        return(
                            <List 
                                method={rmservice[methodforAll]}
                                editURL={editURL}
                                />
                        )
                    }}
                </Consumer>;

    const right = <Consumer>
                    {(rmservice) => {
                        return(
                            <Route 
                                    path={`/${pagename}/:id?`} 
                                    render={({match}) => <Exactitem id={match.params.id} method={rmservice[methodforOne]}>
                                        {li}
                                    </Exactitem>}/>
                        )
                    }}
                </Consumer>

    return(
        <Row left={left} right={right}/>
    )
}

export default RestPage;