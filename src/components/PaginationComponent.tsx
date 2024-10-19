import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

type PaginationProps= {flagForward:boolean, flagBackward: boolean};
const PaginationComponent:FC<PaginationProps> = () => {
    const [qwery, setQuery] = useSearchParams({page: `1`})

    const onclickBack = ()=>{
        const page = qwery.get(`page`);
        if (page && +page >1){
            let crrntPg = +page;
            crrntPg--;
            setQuery({page: crrntPg.toString()});

        }
    }

    const onclickForward = ()=>{
        const page = qwery.get(`page`)
        if (page){
            let crrntPg = +page;
            crrntPg++;
            setQuery({page: crrntPg.toString()})
        }}

    return (
        <div>
            <button onClick={onclickBack} disabled={flagBackward}>Back</button>
            <button onClick={onclickForward} disabled={flagForward}>Forward</button>
        </div>
    );
};

export default PaginationComponent;