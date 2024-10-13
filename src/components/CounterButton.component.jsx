import { useState } from 'react';

export default function CounterButton({ props }) {
    // const [count, setCount] = useState(0);

    const { count, setCount } = props;

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    )
}