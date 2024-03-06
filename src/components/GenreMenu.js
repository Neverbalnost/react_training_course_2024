import React from "react";

export default function GenreMenu(props) {
    return (
        <menu className='genre-menu'>
            {props.genres.map((genre, index) => <li key={genre} className={index === props.value ? 'genre genre--chosen' : 'genre'}>
                <button onClick={_ => props.callback(index)}>{genre}</button>
            </li>)}
        </menu>
    )
}