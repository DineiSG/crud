
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
          <table key={item.id}>
            <tbody>
              <tr>
              <td>Nome: {item.name} </td>
              <td>Quantidade: {item.quantity} </td>
              <td>Cod: {item.code} </td>
              <td><button onClick={()=>handleRemove(item.id)}>Excluir</button></td>
            </tr>
             </tbody>
          </table>
        ))}
    </div>
  )
}

export default Estoque
