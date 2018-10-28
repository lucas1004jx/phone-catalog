import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPhones} from '../actions/fetchPhoneAction';
import {selectPhone} from '../actions/selectPhoneAction';
import {deselectBrand} from '../actions/deselectBrand';
import {deselectProduct} from '../actions/deselectProduct';
import Preloader from './Preloader';

const URL='http://localhost:4000/images/';
class PhoneListContainer extends Component{
      componentDidMount(){
          //to simulate the request time
          setTimeout(()=>this.props.fetchPhones(),2000); 
      }

     renderProduct(){

         const Brand=this.props.brand;
         const Type=this.props.product;
         let Products=this.props.phones;
         if(Brand == null && Type==null){
           Products=this.props.phones;
         }else if(Brand==null) { 
             Products=Products.filter((phone)=>phone.product===Type);
         }else if(Type==null){
            Products=Products.filter((phone)=>phone.brand===Brand);
         }else{
            Products=Products.filter((phone)=>phone.product===Type && phone.brand===Brand);
         }
 
       return (
           Products.map((phone,index)=>
           <div className="phone" key={index} data-id={phone.id}>
             <img src={`${URL}${phone.displayImage}`} alt="" onClick={this.props.selectPhone}/>
            <div className="detail">
                 <p className="brand">
                 {phone.brand}
                 </p>
                 <p className="model">
                {phone.model.replace(/-/g,' ')}</p>
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
                    <div className="product-name subMenu" onClick={this.props.deselectProduct}>{this.props.product}</div>
                    ):null}
             </div>
          )
      }

    render(){
        if(!this.props.phones.length){
            return <Preloader/>
        }
        return(
            <div className="phones-container">
            {this.renderSubMenu()}
               {this.renderProduct()}
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

export default connect(mapStateToProps,{fetchPhones,selectPhone,deselectBrand,deselectProduct})(PhoneListContainer);