import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import SearchBar from './Components/SearchBar';
import AddSong from './Components/AddSong';




function App() {
  return (
    
    <div className="App">
      <Header/>
      <SearchBar/>
      <MainContent/>
      <AddSong/>
    </div>
    
  );
}

export default App;
