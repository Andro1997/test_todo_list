import React from 'react';
import Stats from './Stats';


function Header(props) {
    return (
        <header>
            <Stats todos={props.todos} />
            <h1>Список гостей</h1>
        </header>
    );
}

export default Header;