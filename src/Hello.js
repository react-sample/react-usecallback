import React from 'react';
// import { useCountRender } from './useCountRender';

const Hello = React.memo(({increment}) => {

    // useCountRender();

    return (
        <button onClick={() => increment(1)}>hello</button>
    );

});

export default Hello;