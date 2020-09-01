import React,{Component}  from 'react';
import './footer.css';
import Social from '../Social/Social';


class Footer extends Component {

      render (){
   return (
 
<footer className="app-footer">
   <div class="social">
      <Social  />{this.props.text}
   </div> 
   
    
    </footer>
  


  
)
   }
}
export default Footer;
