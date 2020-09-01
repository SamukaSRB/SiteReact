import React, { Component } from 'react';
import axios from 'axios';

export class FormProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Id: '',
            name: '',
            descrition: '',
            price: '',
            quant: '',
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://app-bdteste.herokuapp.com/product/create', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { Id, name, description, price, quant } = this.state
        return (
          
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                    <label for="validationDefault01">Nome</label>
                        <input type="text"  class="form-control" name="name" values={name} onChange={this.changeHandler} placeholder="Nome" />
                    </div>
                    <div>
                    <label for="validationDefault01">Descrição</label>
                        <input type="text" class="form-control" name="description" values={description} onChange={this.changeHandler} placeholder="Descrição" />
                    </div>
                    <div>
                    <label for="validationDefault01">Preço</label>
                        <input type="text" class="form-control" name="price" values={price} onChange={this.changeHandler} placeholder="Preço" />
                    </div>
                    <div>
                    <label for="validationDefault01">Quantidade</label>
                    <input type="text" class="form-control" name="quant" values={quant} onChange={this.changeHandler} placeholder="Quantidade" />
                    </div>
                    <button class="btn btn-primary" >Salvar</button>


                </form>



           
        )
    }


}
















export class ListProduct extends Component {

    state = {
        product: [],
    };

    componentDidMount() {
        axios.get('http://app-bdteste.herokuapp.com/product/all')
            .then(response => {
                console.log(response)
                this.setState({ product: response.data })
            });

    }

    render() {
      
        return (
            <table className="table  table-bordered  table-sm-3"> 
                <thead className="thead-dark text-center">
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Quant</th>
                    </tr>
                </thead>
                <tbody  >
                    {this.state.product.map(product =>
                         <tr scope="row" key={product.Id}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.quant}</td>
                        <td><button type="button" className="btn btn-info  sm"  >Editar</button></td>
                        <td><button type="button" className="btn btn-info  sm" >Deletar</button></td>
                    </tr>)}
                </tbody>
             
            </table>

        )
    }
}
export default class ProductBox extends Component {

    render() {
        return (
            <div className='row'>
                <div className='col-md-5 my-3'>
                    <FormProduct />
                </div>
                <div className='col-md-5 my-3'>
                    <ListProduct />
                </div>

            </div>


        );
    }

}