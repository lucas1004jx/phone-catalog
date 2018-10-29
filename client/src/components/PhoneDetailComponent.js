import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectPhone} from '../actions/selectPhoneAction';
import {closeOverlay} from '../actions/closeOverlayAction';

const URL='http://localhost:4000/images/';

class PhoneDetailComponet extends Component{

    render(){
    // console.log(store.getState());
    
        const phone=this.props.phones.filter((phone)=>phone.id === this.props.activePhone)
        if(!this.props.phoneDisplay){
          return(
              <div></div>
          )
        }
        
        return(
            <div className="detail-container">
               <div className="detail">
               <div className="product-img">
               <img src={`${URL}${phone[0].detailImage}`} alt={phone[0].brand}/>
               </div>
               <div className="info">
                 <p className="brand">
                 <span>brand:</span>{phone[0].brand}
                 </p>
                 <p className="model">
                 <span>model:</span>{phone[0].model.replace(/-/g,' ')}</p>
                 <p className="state">
                 <span>state:</span>{phone[0].state}</p>
                 <p className="year">
                 <span>year:</span>{phone[0].year}</p>
                 <p className="price">
                 <span>price:</span>{phone[0].price+" €"}
                 </p>
                 <p className="descri">
                 <span>description:</span>{phone[0].description}</p>
                 
                 </div>
                 <button onClick={this.props.closeOverlay}>close</button>
            </div>
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