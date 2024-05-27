import { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { randomNumber } from '../services/util';
import { colorList } from '../services/util';


export default function ColorPlayer() {
    const [color, setColor] = useState( colorList[randomNumber(0,  colorList.length - 1)]);

    function changeColor() {
        console.log('change color');
        setColor(colorList[randomNumber(0,  colorList.length)]);
    }

    useEffect(() => {
        document.body.style.backgroundColor = color;
    },[color]);

    return (
        <div className='container'>
            <Button onClick={changeColor} style={{background: color, text: 'white'}}>
                New color
            </Button>
        </div>
    );
}