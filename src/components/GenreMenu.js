import React from "react";

export default function GenreMenu(props) {
    return (
        <menu className='genre-menu'>
            {props.genres.map((g, i) => <li className={i === props.value ? 'genre genre--chosen' : 'genre'}>
                <a href="#" onClick={_ => props.callback(i)}>{g}</a>
            </li>)}
        </menu>
    )
}