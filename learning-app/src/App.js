import logo from "./logo.svg";
import { Greet } from "./components/greet";
import  Welcome  from "./components/welcome";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
