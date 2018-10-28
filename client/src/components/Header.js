import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBrand} from '../actions/selectBrandAction'
import apple from '../images/apple-logo.png';
import samsung from '../images/samsung-logo.png';
import huawei from '../images/huawei-logo.png';
import xiaomi from '../images/xiaomi-logo.png';
import store from '../store';
const Brand=['apple','samsung','huawei','xiaomi'];
const Logo={apple,samsung,huawei,xiaomi};
const menuItem=['mobile','tablet','watch'];
class Header extends Component{
    renderLogo(){
        return(
            Brand.map((logo,index)=>
            <img src={Logo[logo]} alt={logo} className="logo" onClick={this.props.selectBrand} key={index}/>
            )
        )
       
    }
    renderMenu(){
        return(
            menuItem.map((item,index)=>
            <li key={index}
             onClick={this.props.selectBrand}>
             {item}
             </li>
            )
        )
       
    }
     render(){
         console.log('header',store.getState());
         
         return(
         <div className="header-container">
         <div className="header">
         <h1>phone catalog</h1>
         <div className="logos">
         {this.renderLogo()}
         </div>
         <nav>
             <ul className="navbar">
             {this.renderMenu()}
             </ul>    
         </nav>
         </div>
         </div>
         )
     }
}

const mapStateToProps= state=>({
    brand:state.selectBrand.brand,
    product:state.selectBrand.product

});

export default connect(mapStateToProps,{selectBrand})(Header);