import './App.css';
import Counter from './components/counterComponent';
import SearchForm from './components/searchForm';

function App() {
  return (
    <div id='root'>
      <div className='counter'>
        <Counter value={0}></Counter>
        <SearchForm value={'Random stuff about dinosaurs'} callback={(prompt) => alert(`WOOOOAAAAA!!! You were looking for "${prompt}"! Impressive!`)}></SearchForm>
      </div>
    </div>
  );
}

export default App;
