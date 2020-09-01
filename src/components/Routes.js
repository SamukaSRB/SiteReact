import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Checkout from '../pages/Checkout';
import Vestuario from '../pages/Vestuario';
import Eletronicos from '../pages/Eletronicos';
import Administrador from '../pages/Administrador';

class Router extends  Component{
   render(){
       return(
        <div>
         <Switch>
         <Route component={Administrador} path = "/administrador"/>
         <Route exact component={Home} path="/home"/>              
         <Route  component={Contact} path="/contato"/>       
         <Route  component={About} path="/about"/>  
         <Route component={Checkout} path = "/checkout"/>
         <Route component={Vestuario} path = "/vestuario"/>
         <Route component={Eletronicos} path = "/eletronicos"/>
        </Switch>                 
         </div>

       )
   }
} 
export default Router;