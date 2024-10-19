import axios from "axios";
import {BaseRequestType} from "../models/BaseRequestType";
import {IQuotes} from "../models/IQuotes";


let limit:number = 30; //can be changed at adaptation

const axiosInstance = axios.create({baseURL: `https://dummyjson.com/`});
export const apiService = {
    quotes: {
        getAll: async (page: number): Promise<BaseRequestType & { quotes: IQuotes[] }> => {
            const skip = (page - 1) * limit;


            const {data} = await axiosInstance.get<BaseRequestType & { quotes: IQuotes[] }>('/quotes', {
                params: {
                    skip: skip,
                    limit: limit
                }
            });


            return data;
        }
    }
}