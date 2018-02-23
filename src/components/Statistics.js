import React from 'react';

const Statistics = (props) => {
    return(
        <div>
            <h2>
                Statistics:
            </h2>
            <p>
                users: {props.users}
            </p>
            <p>
                furniture: {props.furniture}
            </p>
        </div>
    )
}

export default Statistics;