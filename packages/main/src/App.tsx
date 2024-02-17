import { ValculatorContextProvider } from "@valculator/context";
import "./App.css";
// import { allItems } from "@valculator/data";
// import { MaterialsType } from "@valculator/data/types";
import { Test } from "./Test";

function App() {
  // console.log(allItems);

  return (
    <ValculatorContextProvider>
      <div>
        <h1>Main Application</h1>
        <Test />
      </div>
    </ValculatorContextProvider>
  );
}

export default App;
