import "./App.css";
import { Valculator } from "@valculator/interface";
import { ValculatorStyleProvider } from "@valculator/theme";

function App() {
  return (
    <ValculatorStyleProvider>
      <Valculator />
    </ValculatorStyleProvider>
  );
}

export default App;
