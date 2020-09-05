import React, { Component } from 'react';
import ErrorIndicator from './errorIndicator';

export default class Errorboundry extends Component{
    state={
        error: false
    }

    componentDidCatch(){
        this.setState({
            error: true
        });
    }

    render(){
        return(
            <>
                {this.state.error ? <ErrorIndicator/> : this.props.children}
            </>
        )
    }

}