import React, {FC} from "react"
import {IQuotes} from "../models/IQuotes";

type QuotesProps = {
    quotes: IQuotes[];
}
const Todos: FC<QuotesProps> = ({quotes}) => {
    return (
        <div>
            {
                quotes.map(item => (<div><h3>{item.quote} - <i>{item.author}</i></h3></div>))
            }

        </div>
    );
};

export default Todos;