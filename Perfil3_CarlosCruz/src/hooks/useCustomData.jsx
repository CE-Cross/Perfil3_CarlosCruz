import { useState, useEffect } from 'react'

const useCustomData = () => {

    const API_URI = "https://fakestoreapi.com/products"

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URI);
            const json = await response.json();
            setApiData(json);
        } catch (error) {
            console.error('Error:', error);
        } finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return { apiData, loading };
}

export default useCustomData;