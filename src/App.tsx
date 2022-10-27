import React from "react";
import "./App.css";
import { Button } from "./components/button/button";
import Checkbox from "./components/checkbox/chechbox";
import Input from "./components/input/input";
import RadioButton from "./components/radio-button/radio-button";

function App() {
  return (
    <div className="App">
      <Button className="oytun">oytun</Button>
      <Input placeholder="OYTUN DINC" />
      <Checkbox chechboxText="Konopelski Group" />
      <RadioButton chechboxText="Konopelski Group"/>
    </div>
  );
}

export default App;
