import './bootstrap.min.css'
import './style.css'
import {Link} from 'react-router-dom'
import Header from '../../Components/Header';


function Dev() {
    return (
      <div className='container'>
        <Header/>
    <h3 className='text-center'>Bem vindo a sua area de desenvolvedor</h3>
        
         <div className='jumbotron'>
               {/* CARD 1 */}
              <div class="row">
                      <div class="col-sm-6">
                        <div class="card cardBorder">
                          <div class="card-body">
                            <h5 class="card-title">Nome do curso</h5>
                            <p class="card-text">aqui vem a descrição do que vai ser o curso</p>
                            <Link to="" class="btn btn-primary">Estudar</Link>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="card cardBorder">
                          <div class="card-body">
                            <h5 class="card-title">Nome do curso</h5>
                            <p class="card-text">aqui vem a descrição do que vai ser o curso</p>
                            <Link to="" class="btn btn-primary">Estudar</Link>
                          </div>
                        </div>
                      </div>
              </div><br/>

              <div class="row">
                      <div class="col-sm-6">
                        <div class="card cardBorder">
                          <div class="card-body">
                            <h5 class="card-title">Nome do curso</h5>
                            <p class="card-text">aqui vem a descrição do que vai ser o curso</p>
                            <Link to="" class="btn btn-primary">Estudar</Link>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="card cardBorder">
                          <div class="card-body">
                            <h5 class="card-title">Nome do curso</h5>
                            <p class="card-text">aqui vem a descrição do que vai ser o curso</p>
                            <Link to="" class="btn btn-primary">Estudar</Link>
                          </div>
                        </div>
                      </div>
              </div><br/>

              <div class="row">
                      <div class="col-sm-6">
                        <div class="card cardBorder">
                          <div class="card-body">
                            <h5 class="card-title">Nome do curso</h5>
                            <p class="card-text">aqui vem a descrição do que vai ser o curso</p>
                            <Link to="" class="btn btn-primary">Estudar</Link>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="card cardBorder">
                          <div class="card-body">
                            <h5 class="card-title">Nome do curso</h5>
                            <p class="card-text">aqui vem a descrição do que vai ser o curso</p>
                            <Link to="" class="btn btn-primary">Estudar</Link>
                          </div>
                        </div>
                      </div>
              </div>
           </div>


          {/* paginação  */}
      <nav>
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Próximo</a></li>
        </ul>
      </nav>

      </div>



    );
  }
  
  export default Dev;
  