import { useState } from 'react';
import Colorize from '../colorize/Colorize';
import Content from '../content/Content';

const ColorizedContent = () => {
    const [textColor, setTextColor] = useState('#ffffff');

    return (
        <div>
            <Content textColor={textColor} />
            <Colorize onColorChange={setTextColor} />
        </div>
    );
};

export default ColorizedContent;