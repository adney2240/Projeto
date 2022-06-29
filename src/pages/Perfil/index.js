import './bootstrap.min.css'
import './style.css'
import Header from '../../Components/Header';
import React from 'react';
import perfil from '../../Imagens/Imagem_perfil/perfil.png'
import background from '../../Imagens/Imagem_perfil/background.jpg'
function Perfil(){
    return(
        <div className='Container'>
            <Header/>
            <div className='container containerBorder '>
                
                <div className='row rowPosition'>
                    <div >
                        {/* perfil do usuario    */}
                            <div class="card cardPerfil">
                                <img class="card-img-top imgTamanho" src={perfil} alt="Imagem de capa do card"/>
                                <div class="card-body">
                                    <h5 class="card-title">Nome da pessoa:</h5>
                                    <p class="card-text">Skills:</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <p className='text-center'>Nivel:</p>
                                    {/* criando a barra de progresso */}
                                        <div class="progress bar ">Exp:
                                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">Data de inscrição: 12/12/1901 </li>
                                    <li class="list-group-item"><p className='text-center'>Media de commits:</p>
                                        <div class="progress bar">
                                            <div class="progress-bar " role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                   </li>
                                   
                                </ul>
                                <div class="card-body">
                                    <a href="#" class="card-link">Github</a>
                                    <a href="#" class="card-link">Linkedin</a>
                                </div>
                               
                            </div>
                            
                    </div>
                    
                    
                </div>
            </div>
            </div>
    )
}

export default Perfil;