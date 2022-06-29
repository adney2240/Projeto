import {BrowserRouter, Routes, Route} from "react-router-dom";


import Home from './pages/Home'
import Dev  from './pages/Dev'
import Infra from "./pages/Infra";
import Login from "./Login";
import Cadastro from "./pages/Cadastro";
import Perfil from "./pages/Perfil";

/* fazendo configuração de rotas */
function RoutesApp(){
    return(
        <BrowserRouter>
       
        <Routes>
        
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Dev" element={<Dev/>} />
        <Route path="/Cadastro" element={<Cadastro/>}/>
        <Route path="/Infra" element={<Infra/>}/>
        <Route path="/Perfil" element={<Perfil/>}/>
        </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp;