import React from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
const title = "Slideshow App";

const slides = [ {
    title: "Hacker Rank Test",
    text: "I am taking hackerrank text"
},
{
    title: 'I will pass this test',
    text: "I am definitely going to pass this test"
} ];

function App() {
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
                <Slides slides={slides} />
            </div>
        </div>
    );
}

export default App;
