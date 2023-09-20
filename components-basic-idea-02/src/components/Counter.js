import { useState } from "react";

const getTitle = (count) => {
    switch (count) {
        case 1:
            return 'First Blood';
        case 2:
            return 'Double Kill';
        case 3:
            return 'Tripple Kill';
        case 4:
            return 'Multi Kill';
        case 5:
            return 'Unstoppable';
        default:
            return 'Counter'

    }
}

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const incrementCounterHandler = (e) => {
        setCounter((oldCounter) => oldCounter + 1);
    };

    const decrementCounterHandler = (e) => {
        setCounter((oldCounter) => oldCounter - 1);
    };

    const clearCounterHandler = (e) => {
        setCounter(0);
    };


    return (
        <div>
            <p style={{ fontSize: Math.max(counter, 1) + 'em' }}>
                {counter > 5 ? 'Godlike' : getTitle(counter)}: {counter}
            </p>

            {counter > 0
                ? <button onClick={decrementCounterHandler}>-</button>
                : null
            }

            {props.canReset && <button onClick={clearCounterHandler}>Clear</button>}

            {counter < 10
                ? <button onClick={incrementCounterHandler}>+</button>
                : null
            }

        </div>
    );
};

export default Counter;