import React, { Component } from 'react';
import './exact-item.css';
import Loader from '../loader/loader';
import Errorboundry from '../errorboundry/errorboundry';

export default class Exactitem extends Component{

    state={
        item: {},
        loading: true
    }

    componentDidMount(){
        this.getData();
    }

    componentDidUpdate(prevProps){
        if(prevProps.id !== this.props.id){
            this.getData();
        }
    }

    getData(){
        const id = this.props.id;
        const method = this.props.method;
        method(id).then(res=>{
                this.setState({
                    item: res,
                    loading: false
                });
            }).catch(error=>{
                console.log(error);
            });
    }

    render(){
        const {item} = this.state;
        const{image, name, id} = this.state.item;

        const noticement = <div className="text-light">&larr; Please choose an item from the left column</div>;

        const listgroupitemsheader = <div className={!image? "list-group-item list-group-item-action flex-column align-items-start active" : "list-group-item list-group-item-action flex-column align-items-start active w-50"}>
                                        <div className="d-flex w-100 justify-content-between">
                                        <h5>{name}</h5>
                                        <small>id: <span>{id}</span></small>
                                        </div>
                                        {image? <img src={image} alt="character"/> : null}
                                    </div>

        const listgroupitems =  <>
                                    {listgroupitemsheader}
                                    <ul className={!image? "list-group" : "list-group w-50"}>
                                        {React.Children.map(this.props.children, child => {
                                            return(React.cloneElement(child, {item}))
                                        })}
                                    </ul>
                                </>

        const listgroup =   <div className={!this.state.item.image? "list-group" : "list-group flex-row"}>
                                {this.state.item.name? listgroupitems : noticement}
                            </div>
        return(
            <Errorboundry>
                {this.state.loading ? <Loader/> : listgroup}
            </Errorboundry>
        )
    }
}