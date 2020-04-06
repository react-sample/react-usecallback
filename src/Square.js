import React from 'react';
import { useCountRender } from './useCountRender';

const Square = ({n, increment}) => {

    useCountRender();

    return (
        <button onClick={() => increment(n)}>{n}</button>
    );
    
};

export default React.memo(Square);