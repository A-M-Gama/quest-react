import { useState } from 'react';
import './content.css';

const Content = ({ textColor = '#ffffff' }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (textInput) => {
        setInputValue(textInput.target.value);
    };

    const handleButtonClick = () => {
        setInputValue(inputValue.toUpperCase());
    };

    return (
        <div className='contentBox'>
            <h2>UpperCase/Color your message</h2>
            <input 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
                style={{ color: textColor }}
            />
            <button onClick={handleButtonClick}>UPPERCASE IT</button>
        </div>
    );
};

export default Content;