import { AxiosError, AxiosResponse } from "axios";

export interface IAxiosParams {
    apiUrl: string
    apiParams : {
        ts: string
        apikey: string
        hash: string
        offset:number
        limit: number
        nameStartsWith?:string

    }
}

export interface IFetchDataReturn {
    response: AxiosResponse
    error: Error | AxiosError
    isLoading: boolean 
}
export interface IFetchData {
    ():IFetchDataReturn
}