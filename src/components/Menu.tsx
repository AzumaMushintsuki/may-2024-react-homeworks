import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/quotes`}>Quotes</Link></li>
            </ul>
        </div>
    );
};

export default Menu;