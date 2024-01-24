import { useFetch } from "../hooks/useFetch"

const Estoque = () => {
  const url="http://localhost:3000/products"
  const {data:items, loading, error} = useFetch(url)
  console.log(items)
  return (
    <div>
        <h1>Estoque</h1>
        {loading && <p>Carregando dados</p>}
        {error && <p>{error}</p>}
        {items && items.map((item)=>(
          <table>
            <tr>
              <td>Item</td>
              <td>Quantidade</td>
            </tr>
            <tr>
              <td key={item.id}></td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          </table>
           
        ))}
      
    </div>
  )
}

export default Estoque
