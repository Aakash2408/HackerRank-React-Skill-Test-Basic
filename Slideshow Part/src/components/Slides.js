
import React, {useState} from 'react';
function Slides({slides}) {
    const [ currentIndex, setCurrentIndex ] = useState(0);

    function handleNext() {
        setCurrentIndex(currentIndex+1)
    }

    function handlePrevious() {
        setCurrentIndex(currentIndex-1)
    }

    function handleRestart() {
        setCurrentIndex(0)
    }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={handleRestart} disabled={currentIndex === 0}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={handlePrevious} disabled={currentIndex === 0}>Prev</button>
                <button data-testid="button-next" className="small" onClick={handleNext} disabled={currentIndex === slides.length-1}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentIndex].title}</h1>
                <p data-testid="text">{slides[ currentIndex ].text}</p>
            </div>
        </div>
    );

}

export default Slides;
