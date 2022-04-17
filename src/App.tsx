import React from 'react';
import './App.css';
import Main from "./components/m3-blocks/Main";
import Header from "./components/m1-header/Header";
import Footer from "./components/m4-footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
