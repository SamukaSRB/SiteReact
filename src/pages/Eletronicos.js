import React,{Component} from 'react';
import api from '../service/api';



class About extends Component{
state = {
    products:[]

};
componentDidMount(){
    this.loadProducts();
}
loadProducts = async () =>{
    const response = await api.get("/all");
    this.setState({ products: response.data });
};
render(){
    return(
<div>
{this.state.products.map(product =>(
<h2>{product.name}</h2>
))}
{this.state.products.map(product =>(
<h2>{product.price}</h2>
))}

{this.state.products.map(product =>(
<h2>{product.description}</h2>
))}
<div>

</div>

</div>

    );
}
}
export default About;