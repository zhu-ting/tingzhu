import React, { Fragment, useState } from 'react';

const LikeButton: React.FC = () => {
    const [ like, setLike ] = useState(0);
    const [ on, setOn ] = useState(true);

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
