import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import {IAxiosParams} from "./useAxiosHook.d"

/*A custom hook which shall report the loading and error state as well*/
const useAxios:any = (axiosParams:IAxiosParams) => {
    const [response, setResponse] = useState<AxiosResponse>();
    const [error, setError] = useState<Error | AxiosError>();
    const [isLoading, setloading] = useState<boolean>(true);
    const {apiUrl,apiParams}:IAxiosParams = axiosParams;

    const fetchData = () => {
        axios
            .get(apiUrl, {params: {
               ...apiParams
              }})
            .then((res) => {
                setResponse({...res.data.data,results: res.data.data.results.filter( 
                    (item: any) =>
                      !item.thumbnail?.path?.endsWith("image_not_available")
                  )});
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {fetchData();}, [apiParams.offset,apiParams.nameStartsWith]); 

    // custom hook returns value
    return { response, error, isLoading };
};

export default useAxios;