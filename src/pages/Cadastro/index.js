import './bootstrap.min.css'
import{Link} from 'react-router-dom'



function entrar(){
    alert("voce foi cadastrado com sucesso")
}
function Cadastro() {
    return (
  
  
      <div className='container jumbotron '>
        <h1>Realize o seu cadastro agora e venha estudar com a<br/> Go dev!</h1><br/><br/>
        <form>
            <div class="row">
                <div class="col">
                    <label>Nome</label>
                    <input type="text" class="form-control" placeholder="Nome"/>
                 </div>
                <div class="col">
                    <label>Sobrenome</label>
                     <input type="text" class="form-control" placeholder="Sobrenome"/>
                </div>
            </div>
</form><br/><br/>
    <form>
            <div class="row">
                <div class="col">
                         <label>Email</label>
                         <input type="text" class="form-control" placeholder="exemplo@mail.com"/>
                 </div>
                <div class="col">
                        <label>Senha</label>
                        <input type="password" class="form-control" placeholder="Senha"/>
                </div>
                
             </div><br/>
                     
             <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Lembrar meu acesso</label>
            </div>

            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Aceito termos e condições de uso</label>
            </div>
           
            <Link to="/Home" href='#' onClick={entrar} className='btn btn-success'>Cadastrar</Link>
    </form>
  
            
  
        </div>
      
    );
  }
  
  export default Cadastro;