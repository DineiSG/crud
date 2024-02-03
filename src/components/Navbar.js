import {NavLink} from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {
  return (
    <nav>
       
       <NavLink to='/home'>Home</NavLink>
       <NavLink to='/cadastro'>Cadastro de Produtos</NavLink>
       <NavLink to='/estoque'>Estoque</NavLink> 
    </nav>
  )
}

export default Navbar
