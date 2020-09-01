import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from '../src/components/Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => (   
   <div className="image">
    
<Header />
<Routes /> 
<Footer text={'samuka-srb@live.com'}/>
   </div> 
   

  


)

export default App