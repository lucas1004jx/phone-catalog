import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPhones} from '../actions/fetchPhoneAction';
import {selectPhone} from '../actions/selectPhoneAction';



class PhoneListContainer extends Component{
      componentDidMount(){
          this.props.fetchPhones();   
      }

     renderPhone(){
       return (
           this.props.phones.map((phone,index)=>
           <div className="phone" key={index} data-id={phone.id}>
             <img src="" alt="" />
            <div className="detail">
                 <p className="brand">
                 <span>brand:</span>{phone.brand}
                 </p>
                 <p className="version">
                 <span>version:</span>{phone.version}</p>
                 <p className="price">
                 <span>price:</span>{phone.price}
                 </p>
            </div>
            <button onClick={this.props.selectPhone}>see detail</button>
          </div>
           )
        )
      }

    render(){
      
        return(
            <div className="phones-container">
               {this.renderPhone()}
            </div>
        )
    }
}

const mapStateToProps= state=>({
    phones:state.phones.items,
    phoneDisplay:state.activePhone.display

});

export default connect(mapStateToProps,{fetchPhones,selectPhone})(PhoneListContainer);