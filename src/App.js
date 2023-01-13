import "./App.css";
import Leftmenu from "./components/Leftmenu";
import Mainmenu from "./components/Mainmenu";
import Rightmenu from "./components/Rightmenu";

function App() {
  return (
    <>
      <div className="App">
        <Leftmenu />

        <Mainmenu />
        <Rightmenu />
        <div className="background"></div>
      </div>
    </>
  );
}

export default App;
