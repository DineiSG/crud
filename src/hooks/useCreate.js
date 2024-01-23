import { useState } from "react";

export const useCreate = (url) =>{
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const createItem = async (newItem) =>{
        setLoading (true)
        try{
            const response = await fetch(url, {
                method:'Post',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(newItem)
            })
            const result = await response.json()
            setData(result)
        }catch (error){
            setError('Ocorreu algum erro')
        }finally {
            setLoading(false)
        }
    }
    return {data, loading, error, createItem}
}