import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import './Cadastro.module.css'


const Cadastro_Prod = () => {


  const url = "http://localhost:3000/products/"
  const {data: loading, error, httpConfig} = useFetch(url)

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
        <label className="descr">
          <p>Descrição:</p>
          <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)} />
        </label>
        
        <label className="quant">
          <p>Quantidade:</p>
          <input type="text" value={quantity} name="quantity" onChange={(e)=>setQuantity(e.target.value)}/>
        </label>
        
        <label className="cod">
         <p>Codigo:</p> 
          <input type="text" value={code} name="quantity" onChange={(e)=>setCode(e.target.value)}/>
        </label>
        <br></br>
        {loading && <button type="submit">Cadastrar</button>}
        {error && <h1>Cadastro realizado com sucesso !</h1>}
      </form>
      
    </div>
  )
}

export default Cadastro_Prod
