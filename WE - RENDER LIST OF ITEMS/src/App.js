import { Skills } from "./components/Skills";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>WE - RENDER LIST OF ITEMS</h1>
      <Skills items={["skill1", "skill2", "skill3"]} />
    </div>
  );
}
