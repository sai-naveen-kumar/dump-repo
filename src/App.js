import './App.css';
import Header from './components/header';
import About from "./components/about"
import Footer from './components/footer';
import Sections from './components/sections';
import { useState } from 'react';
function App() {

    const [hmClicked, setHmClicked] = useState(false)
    function handleClick() {
        setHmClicked(!hmClicked)
    }
    return (
        <div className="App">
            <Header hmClicked={hmClicked} handleClick={handleClick} />
            <About hmClicked={hmClicked} handleClick={handleClick} />
            <Sections hmClicked={hmClicked} handleClick={handleClick} />
            <Footer />
        </div>
    )
}

export default App;
