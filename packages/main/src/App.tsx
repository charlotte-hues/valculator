import "./App.css";
import { allItems } from "data";
import { MaterialsType } from "data/types";

function App() {
  console.log(allItems);

  const hh: MaterialsType = "ancient bark";

  console.log(hh);
  // console.log(yabadabadooo);

  return (
    <div>
      <h1>Main Application</h1>
    </div>
  );
}

export default App;
