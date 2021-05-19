import React, { Fragment, useState } from 'react';

const LikeButton: React.FC = () => {
    const [ obj, setObj ] = useState({ like: 0, on: true });

    return (
        <Fragment>
            <button onClick={() => {setObj({ like: obj.like + 1, on: obj.on })}}>
                {obj.like} 👍
            </button>
            <button onClick={() => {setObj({ like: obj.like + 1, on: !obj.on })}}>
                {obj.on ? 'ON' : 'OFF'}
            </button>
        </Fragment>
    )
}

export default LikeButton;
