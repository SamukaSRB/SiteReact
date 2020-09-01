import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Dropmenu from '../Dropdown/DropMenu';
import './header.css';

class Header extends Component {
 
  render(){
    return(      
         <nav className="navbar navbar-expand-lg navbar-light  ">           
          <a className="navbar-brand"><Link to="/vestuario" className="text-white" >SamukaSRB</Link></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link"><Link to="/home" className="text-white">Home</Link><span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link"><Link to="/about" className="text-white">Sobre</Link><span class="sr-only">(current)</span></a>
              </li>     
              <li className="nav-item active">
                <a className="nav-link"><Link to="/servico" className="text-white">Serviços</Link><span class="sr-only">(current)</span></a>
              </li> 
              <li className="nav-item active">
                <a className="nav-link"><Link to="/contact" className="text-white">Contato</Link><span class="sr-only">(current)</span></a>
              </li>  
              <li className="nav-item active">
                <a className="nav-link"><Link to="/administrador" className="text-white">Administrador</Link><span class="sr-only">(current)</span></a>
              </li>                      
               <Dropmenu/>                                     
            </ul>
          <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>  
    </form>
  </div>
</nav>  
        
     );
    }
  }
export default Header;
