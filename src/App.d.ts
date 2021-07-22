import { AxiosError } from "axios";
import { ICharacter } from "./Components/Character/Character.d";

export interface IResponse {
    response: IResult
    isLoading: boolean
    error: AxiosError | Error
}

export interface IResult {
    results:Array<ICharacter>
    offset: number
    limit: number
    total: number
    count: number

}