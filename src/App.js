import React, { useState } from "react";
import "./App.css";

function App() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Counter Example</h1>
                <p>{counter}</p>
                <button onClick={incrementCounter}>Counter</button>
            </header>
        </div>
    );
}

export default App;
