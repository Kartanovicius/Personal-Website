import React from 'react';
import './App.css';
import './components/navbar/Navbar';
import NavBar from "./components/navbar/Navbar";
import Main from "./components/main/main";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar/>
                <Main/>
            </header>
        </div>
    );
}

export default App;
