import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header(){
    return(
        <div>
            <Link to="/">
                <h1 className="text-info">Rick and Morty!</h1>
            </Link>
            
            <div className="btn-group mr-2" role="group" aria-label="First group">
                
                <Link to="/characters/">
                <button type="button" className="btn btn-warning">Characters</button>
                </Link>

                <Link to="/episodes/">
                <button type="button" className="btn btn-danger">Episodes</button>
                </Link>
                
                <Link to="/locations/">
                    <button type="button" className="btn btn-info">Locations</button>
                </Link>
                
            </div>
        </div>

    )
}