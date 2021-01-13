import React from 'react';


export function Indicator({ counter, setCounter, ruleTransition, setRuleTransition, TRANSITION, i, activeIndicator, setActiveIndicator }, key) {
    
    return (
        <>
            <button
                className="nav-indicator"
                key={key}
                onClick={(e) => {
                    setCounter(i);
                    setActiveIndicator(i)
                    if (ruleTransition === 'none') setRuleTransition(TRANSITION);
                }}
                style = {activeIndicator === i? { background: 'radial-gradient(black, black 30%, white 30%)' } : { background: 'white' }}
                ></button>
        </>
    )
}