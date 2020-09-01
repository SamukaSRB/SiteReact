import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';


class Dropmenu extends Component{     
    render(){
        return(
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Dropdown</a>
        <div className="dropdown-menu" aria-labelledby="">
          <a className="dropdown-item bg-gradient text-white"  ><Link to="/acessorios" >Acessórios</Link></a>
          <a className="dropdown-item" ><Link to="/eletronicos" >Eletrônicos</Link></a>
          <a className="dropdown-item " ><Link to="/vestuario" >Vestuários</Link></a>
          <a className="dropdown-item " ><Link to="/perfumes" >Perfumes</Link></a>
          <div className="dropdown-divider "></div>
          <a className="dropdown-item " ><Link to="/varios" >Vários</Link></a>
          </div>                        
          </li>
       );
     }
   }
   
   export default Dropmenu;
     