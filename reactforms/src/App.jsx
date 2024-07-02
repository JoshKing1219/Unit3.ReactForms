import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import "./App.css";

function App() {
  const [token, setToken] = useState(null)

  console.log(token)

  return (
    <div>
      <h1>React Forms</h1>
      <SignUpForm setToken={setToken}/>
      <Authenticate token={token}/>
    </div>
  );
}

export default App;
