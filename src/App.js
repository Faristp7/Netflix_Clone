import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import RowPost from './components/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='netflixOriginals'/>
      <RowPost title='Action' isSmall/>
    </div>
  );
}

export default App;
