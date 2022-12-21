import "./App.css";
import Component from "./components/Component";
import Data from "../src/Data";

function App() {
  let componentElements = Data.map((item) => (
    <Component className="component" key={item.id} item={item} />
  ));
  return <div className="App">{componentElements}</div>;
}

export default App;
