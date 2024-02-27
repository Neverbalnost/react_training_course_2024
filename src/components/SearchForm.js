import React, {useState} from "react";

export default function SearchForm(props) {
    const [searchPrompt, setSearchPrompt] = useState(props.value);

    return (
        <section className='search'>
            <input className='search__input' placeholder={searchPrompt} onKeyUp={(e) => {
                if (e.code === 'Enter') {
                    props.callback(searchPrompt);
                }
            }} onChange={e => setSearchPrompt(e.target.value)}/>
            <button className='search__button' onClick={() => props.callback(searchPrompt)}>Search!</button>
        </section>
    )

}