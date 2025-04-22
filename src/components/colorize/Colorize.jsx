import './colorize.css'

const Colorize = ({ onColorChange }) => {

    return (
        <div className='changeTextColor'>
            <input className='colorChange'
                type="color"
                id="change-text-color"
                name="change-text-color"
                onChange={(color) => onColorChange(color.target.value)}
            />
            <p>Change the text color</p>
        </div>
    );
};

export default Colorize;