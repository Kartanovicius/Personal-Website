import React from 'react';
import './App.css';
import './p-animation';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="navBar">
                    <h1>Donatas Kartanovičius</h1>
                    <div className="hamburger"></div>
                </nav>
                <div className="background">
                    <div className="title">
                        <h2>Creative solution.</h2>
                        <p>.</p>
                        <div className="button">Write me a email</div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
