import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1>Controle de Estoque</h1>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<search/>}/>
          <Route/>
          <Route/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
