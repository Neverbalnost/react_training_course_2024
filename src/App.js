import './App.css';
import Counter from './components/counterComponent';

function App() {
  return (
    <div id='root'>
      <div className='counter'>
        <Counter value={0}></Counter>
      </div>
    </div>
  );
}

export default App;
