import React,{Component}  from 'react';
import './footer.css';

import { FaFacebookSquare} from "react-icons/fa";
import {FaWhatsappSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
class Footer extends Component {

      render (){
   return (
 
<footer className="app-footer">
   <div className="social">  
     
      <FaFacebookSquare className="facebook" />
      <FaWhatsappSquare className="whatsapp" />
      <FaInstagramSquare className="instagram"  />      
   </div> 
 
    
    </footer>
  


  
)
   }
}
export default Footer;
