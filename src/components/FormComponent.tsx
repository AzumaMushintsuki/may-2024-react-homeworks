import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/postValidators";
import {IPost} from "../models/IPost";
import axios from "axios";



const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        }

    } = useForm<IPost>({mode: 'all', resolver: joiResolver(postValidator)});

    const customHandler =async (dataFromForm: IPost) =>{
        const axiosInstance = axios.create({baseURL:`https://jsonplaceholder.typicode.com/`});
        await axiosInstance.post<IPost>(`/posts`,dataFromForm)
            .then(request=>console.log(request.data))
    }

    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <div>
                <label>
                    <input type="number" placeholder={'userId'} {...register('userId')}/>
                    {errors.userId && <div>{errors.userId.message}</div>}
                </label>
            </div>
            <div>
                <label><input type="text" placeholder={'Title'} {...register('title')}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </label>
            </div>
            <div>
                <label>
                    <input type="text" placeholder={'Your Message'} {...register('body')}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </label>
            </div>
            <button disabled={!isValid}>save</button>
        </form>


    );
};

export default FormComponent