import React from 'react';
import {withRouter} from 'react-router-dom';
import Li from '../exact-item/li';
import RestPage from '../pages/restpages';

function Episodes({history}){
    const episodespage = RestPage(
        'episodes',
        'getAllEpisodes',
        'getEpisode',
        [
            <Li label="Air date: " option="air_date" key="air_date"/>,
            <Li label="Episode #: " option="episode" key="episode"/>
        ],
        history
    )

    return(
        <>
            {episodespage}
        </>
    )
}
export default withRouter(Episodes);