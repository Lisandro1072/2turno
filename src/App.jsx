import { useState } from "react";
import Routes from "./assets/routes";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes></Routes>
    </>
  );
}

export default App;
