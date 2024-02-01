import './Estoque.css'
import { useFetch } from "../hooks/useFetch"

const Estoque = () => {
  const url="http://localhost:3000/products"
  const {data:items, loading, error, httpConfig} = useFetch(url)

  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }
 
  return (
    <div>
        <h1>Estoque</h1>
        {loading && <p>Carregando dados</p>}
        {error && <p>{error}</p>}
        {items && items.map((item)=>(
          <ul className='items' key={item.id}>
              <label>
                Descrição:
              </label>
              <li className='name'>{item.name} </li>
              <label>
                Quant.:
              </label>
              <li>{item.quantity} </li>
              <label>
                Cód.:
              </label>
              <li>{item.code} </li>
              <button onClick={()=>handleRemove(item.id)}>Excluir</button>
          </ul>
        ))}
    </div>
  )
}

export default Estoque
