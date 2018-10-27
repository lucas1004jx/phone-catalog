import React,{Component} from 'react';
 
class Phone extends Component{
    
    render(){
        return(
            <div className="phone" onClick={this.props.onClick}>
                <img src="" alt="" />
                <div className="detail">
                 <p className="brand">
                 <span>brand:</span>{this.props.brand}
                 </p>
                 <p className="version">
                 <span>version:</span>{this.props.version}</p>
                 <p className="price">
                 <span>price:</span>{this.props.price}
                 </p>
                </div>
            </div>
        )
    }
}

export default Phone;