import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import oferta1 from '../img/Blusa-Feminina.png'
import logo1 from '../img/images01.png';
import logo2 from '../img/images02.png';
import logo3 from '../img/images03.png';
import logo4 from '../img/images04.png';
import logo5 from '../img/images05.png';
import logo6 from '../img/images06.png';
import BtnComprar from '../components/Botao/ButtonHome';



const Vestuario = () => (
 
    <div className="row">

    <div className="col-sm-4">  
        <div className="card" >
    <img src={oferta1} className="img-responsive"/>
    <p className="price"> R$39.99</p>
    <p>Blusa Feminina Estampa Cachorro </p>
    <Link to ='/checkout'class="active" > 
    <BtnComprar/>
    </Link>    
    </div>     
    </div>

    <div className="col-sm-4">
    <div className="card" >
    <img src={oferta1} className="img-responsive"/>
    <img src={logo3} className="img-responsive"/>   
    <p className="price">R$30.99</p>  
    <p>Conjunto executivo power plus.</p>
    <Link to ='/checkout'class="active" >   
    <BtnComprar/>
    </Link> 
    </div>
    </div>

    <div className="col-sm-4">
    <div className="card" >
    <img src={logo3} className="img-responsive"/>   
    <p className="price">$19.99</p>
    <p>Camisa AAAAAAAAAAAAAAAAA.</p>
    <Link to ='/checkout'class="active" > 
    <BtnComprar/>
    </Link>
    </div>
    </div>

    <div className="col-sm-4">
    <div className="card" >
    <img src={logo3} className="img-responsive"/>    
    <p className="price">$19.99</p>
    <p>Conjunto camisa e short.</p>
    <Link to ='/checkout'class="active" > 
    <BtnComprar/>
    </Link>
    </div>
    </div>

    <div className="col-sm-4">
    <div className="card" >
    <img src={logo5} className="img-responsive"/>    
    <p className="price">$19.99</p>
    <p>Blusa esportiva motoroom</p>
    <Link to ='/checkout'class="active" > 
    <BtnComprar/>
    </Link>
    </div>
    </div>

    <div className="col-sm-4">
    <div className="card" >
    <img src={logo6} className="img-responsive"/>   
    <p className="price">$19.99</p>
  <p>Blusa esportiva motoroom</p>
    <Link to ='/checkout'class="active" > 
    <BtnComprar/>
    </Link>
    </div>  
    </div>
</div>

);

export default Vestuario;