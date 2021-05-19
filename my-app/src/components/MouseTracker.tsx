import React, { useState, useEffect } from 'react';

const MouseTracker: React.FC = () => {
    const [ position, setPositions ] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            console.log('inner');
            setPositions({ x: e.clientX, y: e.clientY });
        }
        document.addEventListener('click', updateMouse);

        // Cleaning up an effect -- By default, effects run after every completed render
        return () => {
            document.removeEventListener('click', updateMouse);
        }
    });

    return (
        <p>X: { position.x } Y: { position.y }</p>
    )
}

export default MouseTracker;
