import React, {Component} from 'react';
import './list.css';
import Loader from '../loader/loader';
import ErrorBoundry from '../errorboundry/errorboundry';

export default class List extends Component{

    state={
        list: [],
        loading: true
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        const method = this.props.method;

        method().then(res => {
            this.setState({
                list: res,
                loading:false
            });
        }).catch(error => {
            console.log(error);
        });
    }

    render(){
        const li = this.state.list.map(({id,name}) => {
            return(
                <li 
                className="list-group-item" 
                key={id}
                onClick={() => this.props.editURL(id)}>{name}</li>
            )
        });

        return(
            <ErrorBoundry>
                {this.state.loading ? <Loader/> : <ul className="list-group"> {li} </ul>}
            </ErrorBoundry>
        )
    }
}

