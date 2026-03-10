import { useEffect, useState } from "react";


const useFetch = (url) => {

    const [dummy, setDummy] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(() => {
            fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error("couldn't retrive data")
                }
                console.log(response)
                return response.json()
            })
            .then(data => setData(data))
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            })
        } , 1000)
    } , []);

    return [data, dummy, error]
}

export default useFetch;