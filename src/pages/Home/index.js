/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css'
import './bootstrap.min.css'
import {Link} from 'react-router-dom'
import Header from '../../Components/Header';
function Home() {
  return (


    <div className='container '>
      
      <Header/><br/>
      <div class="jumbotron bordaContainer">
        <h1 class="display-4">Ola você esta na GO dev!</h1>
          <p class="lead">A plataforma mais completa de cursos que você vai conhecer</p>
        
         <p>Realize seu cadastro nesse link a seguir e aproveite todas as oportunidades que temos </p>
          <Link className='btn btn-success' to="/cadastro">Cadastro</Link>
          </div>

          

      </div>
    
  );
}

export default Home;
