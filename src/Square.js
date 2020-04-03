import React from 'react';
import { useCountRender } from './useCountRender';

const Square = React.memo(({n, increment}) => {

    useCountRender();

    return (
        <button onClick={() => increment(n)}>{n}</button>
    );
    
});

export default Square;