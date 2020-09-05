import React,{Component} from 'react';
import '../Form/formContact.css';

class FormContact extends Component{
    render(){
        return(

<form action="/pagina-processa-dados-do-form" method="post">
<h1 className="titulocontact">Nossos Canais de atendimento</h1>

    <div className="conteudo">
        <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" />
    </div>
    <div >
        <label for="email">E-mail:</label>
        <input type="email" id="email" />
    </div>
    <div >
        <label for="msg">Mensagem:</label>
        <textarea id="msg"></textarea>
    </div>
     </div>
</form>
        )
    }
}
export default FormContact;