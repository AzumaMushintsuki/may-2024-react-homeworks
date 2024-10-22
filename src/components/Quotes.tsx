import React, {FC} from "react"
import {IQuotes} from "../models/IQuotes";

type QuotesProps = {
    quotes: IQuotes[];
}
const Quotes: FC<QuotesProps> = ({quotes}) => {
    return (
        <div>
            {
                quotes.map(item => (<div><h4>{item.quote} - <i><b>{item.author}</b></i></h4></div>))
            }

        </div>
    );
};

export default Quotes;