import './App.scss';
import React, {useState} from "react";
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreMenu from "./components/GenreMenu";

function App() {
    const [genre, setGenre] = useState(0);

    return (
        <section className='unit1'>
            <Counter value={0}></Counter>
            <SearchForm value={'Random stuff about dinosaurs'}
                        callback={(prompt) => alert(`WOOOOAAAAA!!! You were looking for "${prompt}"! Impressive!`)}></SearchForm>
            <GenreMenu genres={['thriller', 'comedy', 'adventure', 'anime']} value={genre}
                       callback={(index) => setGenre(index)}></GenreMenu>
        </section>
    );
}

export default App;
