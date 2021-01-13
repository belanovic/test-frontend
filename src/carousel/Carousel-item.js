import React from 'react';

export function Item({ src, id, i, width, numItems }, key) {
    let style = {};

    if (id === '') {
        style = {
            left: `${width * i}px`,
        }
    } else if (id === 'cloneStart') {
        style = {
            left: `${-width}px`,
        } 
    } else if (id === 'cloneEnd') {
            style = {
                left: `${width * numItems}px`,
            }
        }

    return (
        <>
            <li key={key} className="item" id={id} style={ style }>
                <img src={require(`${src}`)} className="image" alt=""></img>
            </li>
        </>
    )
}