import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPhones} from '../actions/fetchPhoneAction';
import {selectPhone} from '../actions/selectPhoneAction';
import {deselectBrand} from '../actions/deselectBrand';

const URL='http://localhost:4000/images/';
class PhoneListContainer extends Component{
      componentDidMount(){
          this.props.fetchPhones();  
      }

     renderPhone(){
         console.log(this.props.phones);
         const Brand=this.props.brand;
         const Mobiles= Brand === null? 
               this.props.phones:
               this.props.phones.filter((phone)=>phone.brand===Brand);
         console.log(Brand);
         
       return (
           Mobiles.map((phone,index)=>
           <div className="phone" key={index} data-id={phone.id}>
             <img src={`${URL}${phone.displayImage}`} alt="" />
            <div className="detail">
                 <p className="brand">
                 {phone.brand}
                 </p>
                 <p className="model">
                {phone.model}</p>
                 <p className="price">
                 {`${phone.price} €`}
                 </p>
            </div>
            <button onClick={this.props.selectPhone}>see detail</button>
          </div>
           )
        )
      }

      renderSubMenu(){
          return(
              <div className="subMenu-container">
            {this.props.brand !==null ?(
                <div className="brand-name subMenu" onClick={this.props.deselectBrand}>{this.props.brand}</div>
                ):null}

                {this.props.product !==null?(
                    <div className="product-name subMenu" onClick={this.props.deselectBrand}>{this.props.product}</div>
                    ):null}
             </div>
          )
      }

    render(){
      console.log('state change');
        return(
            <div className="phones-container">
            {this.renderSubMenu()}
               {this.renderPhone()}
            </div>
        )
    }
}

const mapStateToProps= state=>({
    phones:state.phones.items,
    phoneDisplay:state.activePhone.display,
    brand:state.selectBrand.brand,
    product:state.selectBrand.product

});

export default connect(mapStateToProps,{fetchPhones,selectPhone,deselectBrand})(PhoneListContainer);