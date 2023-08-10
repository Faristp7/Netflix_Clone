import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import RowPost from "./components/RowPost";
import { action, originals, topRated, upcoming } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={upcoming} title="Up Comming" isSmall />
      <RowPost url={topRated} title="Top Rated" isSmall />
    </div>
  );
}

export default App;
