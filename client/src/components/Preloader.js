import React,{Component} from 'react';

class Preloader extends Component{
    render(){
        return(
            <div className="preloader" data-id={this.props.brand} data-product={this.props.product}>
            <div className="circle"></div>

            </div>
        )
    }
}

export default Preloader;