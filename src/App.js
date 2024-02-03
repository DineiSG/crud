import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Estoque from './pages/Estoque';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login'


function App() {
  return (
    <div className="App">
      <h1>Controle de Estoque</h1>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cadastro'element={<Cadastro/>}/>
          <Route path='/estoque' element={<Estoque/>}/>
          <Route/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
