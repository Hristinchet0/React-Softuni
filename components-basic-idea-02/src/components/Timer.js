import React from 'react';

const Timer = (props) => {
    const [seconds, setSeconds] = React.useState(props.start);

    //Not good practice, useEffect is better
    setTimeout(() => {
        setSeconds(seconds + 1);
        // setSeconds(state => state + 1);
    }, 1000)

    return (
        <div>
            <h2>Timer:</h2>
            Time: {seconds}s
        </div>
    );
}

export default Timer;