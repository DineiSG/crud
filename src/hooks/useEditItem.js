import { useState } from "react";

const useEditItem=(url) => {
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState(null)

    const editItem = async (itemId, updateItem) =>{
        setLoading(true)
        try{
            const response = await fetch (`${url}/${itemId}`,{
                method:'PUT',
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(updateItem),
            })
            if (!response.ok){
                throw new Error('Erro ao editar o item')
            }
        }catch (error){
            setError(error)
        }finally{
            setLoading(false)
        }
    }
    return {loading, error, editItem}
}
export default useEditItem