import './bootstrap.min.css'
import {Link} from 'react-router-dom'
import './style.css'



function Login (){
    return(

        <div className="container position"><br/><br/>
          <h3 className='text-center'>Go!Dev</h3>
             <form>
                      <div className='form-group form'> 
                     <label for="exampleInputEmail1">Usuario</label>
                     <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu usuario"/>
                                    
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Senha</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Lembrar meu acesso</label>
                    </div>
                <Link className='acesso btn btn-success ' to="/Home">Acessar</Link>
               
                <Link className='acessoCad btn btn-success ' to="/Cadastro">Cadastro</Link>
              </form><br/>
        </div>
    )
}
export default Login