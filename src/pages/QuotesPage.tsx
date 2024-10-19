import React, {useEffect, useState} from 'react';
import PaginationComponent from "../components/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import {apiService} from "../services/api.service";
import {IQuotes} from "../models/IQuotes";
import Quotes from "../components/Quotes";


const QuotesPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const [quotes, setQuotes] = useState<IQuotes[]>([]);
    const [flagForward, setFlagForward] = useState<boolean>(false);
    const [flagBackward, setFlagBackward] = useState<boolean>(false);

    useEffect(() => {
        const page = query.get('page');

        if (page) {
            apiService.quotes
                .getAll(+page)
                .then(value => {
                    setQuotes(value.quotes);
                    const lastId = value.quotes[value.quotes.length - 1].id;
                    if (lastId >= value.total) {
                        setFlagForward(true);
                    }else{
                        setFlagForward(false);

                    }
                    +page <= 1? setFlagBackward(true): setFlagBackward(false);
                });

        }


    }, [query]);

    return (
        <div>
            <Quotes quotes={quotes}/>
            <PaginationComponent flagForward={flagForward} flagBackward={flagBackward}/>
        </div>
    );
};

export default QuotesPage;