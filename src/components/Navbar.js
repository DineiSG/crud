import {NavLink} from 'react-router-dom'
import SearchForm from './SearchForm'



const Navbar = () => {
  return (
    <nav>
       <NavLink to='/'>Home</NavLink> 
       <NavLink to='/estoque'>Estoque</NavLink> 
       <NavLink to='/cadastro'>Cadastro de Produtos</NavLink> 
       <NavLink to='/edicao'>Editar Cadastro</NavLink> 
       <NavLink to='/search'>{SearchForm}</NavLink> 
    </nav>
  )
}

export default Navbar
