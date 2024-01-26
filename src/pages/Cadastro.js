import { useState } from "react"
import { useFetch } from "../hooks/useFetch"


const Cadastro_Prod = () => {


  const url = "http://localhost:3000/products"
  const {data:loading, error, httpConfig} = useFetch(url)

  const [name, setName]=useState("")
  const [quantity, setQuantity]=useState("")
  const [code, setCode]=useState("")

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const product = {
      name,
      quantity,
      code
    }

      httpConfig(product, "POST")
      setName("")
      setQuantity("")
      setCode("")

  }
    


  return (
    <div className="add-product">
      <h1>Cadastro de Novo Item</h1>
      
      <form onSubmit={handleSubmit}>
        <label>
          Descrição:
          <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label>
          Quantidade:
          <input type="text" value={quantity} name="quantity" onChange={(e)=>setQuantity(e.target.value)}/>
        </label>
        <label>
          Codigo:
          <input type="text" value={code} name="quantity" onChange={(e)=>setQuantity(e.target.value)}/>
        </label>
        {loading && <button type="submit">Cadastrar</button>}
        {error && <h1>Cadastro realizado com sucesso !</h1>}
      </form>
      
    </div>
  )
}

export default Cadastro_Prod
