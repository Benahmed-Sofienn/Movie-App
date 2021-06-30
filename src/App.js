import React, {useState} from 'react';
import './App.css';
import Search from './Components/Search';
import Rater from './Components/Rater';
import MovieList from './Components/MovieList';


function App() {

  const [inputText, setInputText] = useState("");
  const [rate, setRate] = useState(1)

  const handleChangeFilterByName = (e) => {
    setInputText(e.target.value);
  };


 
 
  return (
    <div className="App">
      <div className="Search">
        <Search handleChangeFilterByName={handleChangeFilterByName}/>
        <Rater  setRate={setRate}/>
      </div>
      <MovieList rate={rate} inputText={inputText} />
      
    </div>
  );
}

export default App;
