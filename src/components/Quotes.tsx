import React, {FC} from "react"
import {IQuotes} from "../models/IQuotes";

type QuotesProps = {
    quotes: IQuotes[];
}
const Todos: FC<QuotesProps> = ({quotes}) => {
    return (
        <div>
            {
                quotes.map(item => (<div>{item.quote}</div>))
            }

        </div>
    );
};

export default Todos;