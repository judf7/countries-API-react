import { useEffect, useState } from "react";

export default function useFetch(url) {
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState("")

    useEffect(() => {
        const fetchData= async() =>{
     setLoading(true)
     try{
        const response = await fetch(url)
        if(!response.ok){
            throw new error ("erreur lors du chargement")
        }
        const result= await response.json()
        setData(result)
        setError(null)
     }catch(e){
        setError(e.message)
     } finally{
        setLoading(false)
     }
    };
    fetchData()
}, [url]);
return {data,loading,error}
}
