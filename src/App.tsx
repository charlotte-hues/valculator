import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Valculator } from "./Valculator/Valculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Valculator />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
