import React from 'react';
import {withRouter} from 'react-router-dom';
import Li from '../exact-item/li';
import RestPage from '../pages/restpages';


function Locations({history}){
    const locationspage = RestPage(
        'locations',
        'getAllLocations',
        'getLocation',
        [
            <Li label="Type: " option="type" key="type"/>,
            <Li label="Dimension: " option="dimension" key="dimension"/>
        ],
        history
    )

    return(
        <>
            {locationspage}
        </>
    )
}

export default withRouter(Locations);
