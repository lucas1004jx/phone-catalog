import React,{Component} from 'react';
import Phone from './Phone';

const URL='http://localhost:3200/phone';

class PhoneListContainer extends Component{
    constructor(props){
        super(props);
        this.state={phones:[],show_phone:''};
        this.handleOnClick=this.handleOnClick.bind(this);
      }
  
     handleOnClick(e){
         
         console.log(e.target);
         
     }

      componentDidMount(){
          console.log('did mout');   
      fetch(URL).then((res)=>res.json()).then((res)=>this.setState({phones:res})
      )
      }
    render(){
        const phones=this.state.phones.map((phone,index)=>
        <Phone brand={phone.brand}
        version={phone.version}
        price={phone.price}
        img={phone.image}
        key={index}
        onClick={this.handleOnClick}
        />
        );
        return(
            <div className="phones-container">
               {phones}
            </div>
        )
    }
}

export default PhoneListContainer;