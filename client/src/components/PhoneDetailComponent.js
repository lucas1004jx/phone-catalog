import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectPhone} from '../actions/selectPhoneAction';
import {closeOverlay} from '../actions/closeOverlayAction';
import store from '../store';
class PhoneDetailComponet extends Component{
    render(){
    console.log(store.getState());
    
        const phone=this.props.phones.filter((phone)=>phone.id === this.props.activePhone)
        console.log(this.props.phoneDisplay);
        if(!this.props.phoneDisplay){
          return(
              <div className="detail-container">
                  phone detail hide
              </div>
          )
        }
        
        return(
            <div className="detail-container">
               <div className="detail">
                 <p className="brand">
                 <span>brand:</span>{phone[0].brand}
                 </p>
                 <p className="version">
                 <span>version:</span>{phone[0].version}</p>
                 <p className="price">
                 <span>price:</span>{phone[0].price}
                 </p>
            </div>
            <button onClick={this.props.closeOverlay}>close window</button>
            </div>
        )
    }
}


const mapStateToProps= state=>({
    phones:state.phones.items,
    phoneDisplay:state.activePhone.display,
    activePhone:state.activePhone.activePhone
});

export default connect(mapStateToProps,{selectPhone,closeOverlay})(PhoneDetailComponet);