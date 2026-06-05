import { useState } from 'react';
import logo from './assets/react.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(false);
    const [showText2, setShowText2] = useState(false);

    const kondisiCounter = () => {
        setCount ((prevCount) => {
            const newCount = prevCount + 100;

            if (newCount === 100) {
                setShowText(true);
                setTimeout(() => {
                    setShowText(false);
                }, 5000);
            }

            if (newCount === 1000) {
                setShowText2(true);
                setTimeout(() => {
                    setShowText2(false);
                }, 5000);
            }

            return newCount;
        });
    };

    return (
        <div className="app">
            <header className="header">
                <div className="logo">Counter App</div>
            </header>

            {showText && (
                <h1 className="if-text">Kamu menyenyuh angka 100!</h1>
            )}

            {showText2 && (
                <h1 className="if-text">Kamu menyenyuh angka 1000, wow!</h1>
            )}

            <div className="content">
                <h1>Counter: <span className="highlight">{count}</span></h1>
                <button onClick={kondisiCounter}>Click</button>
            </div>
            <h1 className="made-by">Made by Saif</h1>
        </div>
    );
}

export default App;