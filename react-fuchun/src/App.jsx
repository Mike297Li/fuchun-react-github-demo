/* eslint-disable no-unused-vars */
import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={viteLogo} className="logo" alt="Vite logo" />
                <img src={reactLogo} className="logo react" alt="React logo" />
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </p>
            </header>
        </div>
    );
}

export default App;
