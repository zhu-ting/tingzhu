import React, { Fragment, useState, useEffect } from 'react';

const LikeButton: React.FC = () => {
    const [ like, setLike ] = useState(0);
    const [ on, setOn ] = useState(true);
    useEffect(() => {
        document.title = `Clicked ${like} times`;
    })

    return (
        <Fragment>
            <button onClick={() => {setLike(like + 1)}}>
                {like} 👍
            </button>
            <button onClick={() => {setOn(!on)}}>
                {on ? 'ON' : 'OFF'}
            </button>
        </Fragment>
    )
}

export default LikeButton;
