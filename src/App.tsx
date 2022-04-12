import React from 'react';
import './App.css';
import Main from "./common/components/main/Main";
import Header from "./common/components/Header/Header";
import Footer from "./common/components/Footer/Footer";

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
