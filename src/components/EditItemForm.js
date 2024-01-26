import useEditItem from "../hooks/useEditItem"
import { useState } from "react"

const EditItemForm = ({itemId, itemCode, onEditSuccess}) => {
    const [updateItemCode, setUpdateItemCode] = useState(itemCode)
    const {loading, error, editItem} = useEditItem (`http://localhost:3000/products/${itemId}`)

    const handleEditItem = async() =>{
        try{
            await editItem(itemId, {nome:updateItemCode})
            onEditSuccess()
        }catch(error){
            console.error('Erro ao editar o item: ', error)
        }
    }
    if(loading){
        return <p>Carregando...</p>
    }
    if(error){
        return <p>Ocorreu um erro ao editar o item: {error.message}</p>
    }

  return (
    <div>
        <h2>Editar Item</h2>
        <input type="text" value={updateItemCode} 
        onChange={(e)=> setUpdateItemCode(e.target.value)}/>
        <button onClick={handleEditItem}>Salvar</button>
      
    </div>
  )
}

export default EditItemForm
