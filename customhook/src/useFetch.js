import React, { useEffect, useState } from 'react';
import axois from "axios";

const useFetch = (url) => {

    const [isLoading,setIsLoading] = useState(false);
    const [data , setData] = useState([]);
    const [error , setError] = useState(false);

    // const fetchUrl =React.useCallback(async() => {
    //     setIsLoading(true);
    //     axois.get(url).then((res) => {
    //         console.log(res.data);
    //         setData(res.data);
    //        }).catch((err) => {
    //         setError(err);
    //        }).finally(() => {
    //         setIsLoading(false);
    //        }) 
 
    // },[url])
       
    useEffect(() => {
    //debouncing

    let timer = setTimeout(() => {
        // fetchUrl(url);
        setIsLoading(true);
        axois.get(url).then((res) => {
            setData(res.data);
        }).catch((err) => {
            setError(err)
        }).finally(() => {
         setIsLoading(false);
        })
    },1000);

    //cleanup function

    return () => {
        clearTimeout(timer);
    }
   
    },[url])
  return {isLoading,data,error}
  
}

export default useFetch