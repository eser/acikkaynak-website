import React, { useState, useEffect } from 'react';

import SummaryResult from './summaryResult';

import * as bulmaStyles from 'bulma';

function Dummy() {
    const [ state, setState ] = useState({
        firstNumber: 4,
        secondNumber: 7,
        result: null,
    });

    useEffect(() => {
        const timer = setTimeout(
            () => setState({
                ...state,
                result: state.firstNumber + state.secondNumber,
            }),
            1000,
        );

        return () => clearTimeout(timer);
    });

    let summary;

    if (state.result === null) {
        summary = 'Calculating...';
    }
    else {
        summary = state.result;
    }

    return (
        <>
            <h1 className={bulmaStyles.title}>Dummy</h1>

            <SummaryResult firstNumber={state.firstNumber} secondNumber={state.secondNumber} summary={summary} />
        </>
    );
}

export {
    Dummy as default,
};
