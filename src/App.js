import React from "react"
import './App.css';
import Header from "./Components/Header/Header"
import SideBar from "./Components/Nav/Nav"
import ControlPanel from "./Components/ControlPanel/ControlPanel"



function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <SideBar />
        <ControlPanel />
      </main>
    </div>
  );
}

export default App;
