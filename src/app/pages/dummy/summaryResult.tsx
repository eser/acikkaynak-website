import React from 'react';

function SummaryResult(props) {
    return (
        <>
            {props.firstNumber} + {props.secondNumber} = {props.summary}
        </>
    );
}

export {
    SummaryResult as default,
};
