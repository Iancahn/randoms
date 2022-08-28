import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function IncreaseCount() {
        setCount(count + 1);
    }
    return (
        <div>
            <p>The count is currently {count}</p>
            <button onClick={IncreaseCount}>Click to Increase</button>
        </div>
    )
}

export default Counter;