import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBrand} from '../actions/selectBrandAction';
import {selectProduct} from '../actions/selectProduct';
import apple from '../images/apple-logo.png';
import samsung from '../images/samsung-logo.png';
import huawei from '../images/huawei-logo.png';
import xiaomi from '../images/xiaomi-logo.png';

const Brand=['apple','samsung','huawei','xiaomi'];
const Logo={apple,samsung,huawei,xiaomi};
const menuItem=['mobile','tablet','watch'];
class Header extends Component{
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            let top=window.pageYOffset;
            const header=document.querySelector('.header-container');
           if(top>=120){
              header.style.top=top - 120 +'px';
              header.classList.add('fixed');
           }else{
            header.style.top=0 +'px';
            header.classList.remove('fixed');
           }
            
        });
    }
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
             onClick={this.props.selectProduct}>
             {item}
             </li>
            )
        )
       
    }
     render(){
         
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

export default connect(mapStateToProps,{selectBrand,selectProduct})(Header);