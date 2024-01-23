import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Valculator } from "./Valculator/Valculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Valculator />,
  },
]);

export function ValculatorApp() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default ValculatorApp;
