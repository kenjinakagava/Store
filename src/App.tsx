import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header>
        <Nav />
      </Header>
    </div>
  );
}

export default App;
