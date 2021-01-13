import React, { useEffect, useState, useRef } from 'react';
import { Item } from './Carousel-item';
import { Indicator } from './Carousel-indicator';
import { debounce } from './debounce.js';

const INTERVAL_PERIOD = 5000;
const TRANSITION = 'transform 250ms ease-in';
const CAROUSEL_WIDTH = 700;
const NUMBER_ITEMS = 5;
let itemsEnumerator = [];
for (let i = 0; i < NUMBER_ITEMS; i++) {
    itemsEnumerator.push(i);
}

export default function Carousel(props) {

    const [pageVisible, setPageVisible] = useState(!document.hidden);

    document.addEventListener('visibilitychange', function () {
    })

    const [width, setWidth] = useState(CAROUSEL_WIDTH);
    const [counter, setCounter] = useState(0);
    const [ruleTransition, setRuleTransition] = useState(TRANSITION);
    const [activeIndicator, setActiveIndicator] = useState(0);
    const carousel = useRef(null);

    const getSize = () => {
    
        if(window.innerWidth === width) return;
        if(window.innerWidth < 700) {
            setWidth(window.innerWidth);
            return;
        }
        setWidth(CAROUSEL_WIDTH);
    };
    window.addEventListener('resize', () => getSize());

    const counterChange = (step) => {
        if ((step < 0 && counter === -1) || (step > 0 && counter === NUMBER_ITEMS)) {
            return;
        }
        setCounter(prev => prev + step);
        setRuleTransition(TRANSITION);
        setActiveIndicator(prev => prev + step);


        if (step < 0 && counter === 0) {
            setActiveIndicator(NUMBER_ITEMS - 1);
            console.log('active indicator changed')
        } else if (step > 0 && counter === NUMBER_ITEMS - 1) {
            setActiveIndicator(0);
            console.log('active indicator changed')
        }
    }

    const handleTransitionEnd = () => {

        if (counter === -1) {

            setRuleTransition('none');
            setCounter(NUMBER_ITEMS - 1);
            setActiveIndicator(NUMBER_ITEMS - 1);

        } else if (counter === NUMBER_ITEMS) {

            setRuleTransition('none');
            setCounter(0);
            setActiveIndicator(0);
        }                                           

    }

    useEffect(() => { 
        setRuleTransition('none');
    }, [width])
    
    useEffect(() => { 
        if(window.innerWidth < 700) {
            setWidth(window.innerWidth);
            return;
        }
    }, [])


    useEffect(() => {

        var interval = setInterval(() => {
            counterChange(1);
        }, INTERVAL_PERIOD)

        /* carousel.current.addEventListener('mouseenter', function () {
            clearInterval(interval);
            console.log('enter na karusel')
        }) */

        carousel.current.addEventListener('mouseleave', function () {

            interval = setInterval(() => {
                counterChange(1)
            }, INTERVAL_PERIOD)
        })

        document.addEventListener('visibilitychange', function () {

            if (document.hidden) {
                clearInterval(interval);
            } else {
                interval = setInterval(() => {
                    counterChange(1)
                }, INTERVAL_PERIOD)
            }

        })
        carousel.current.addEventListener('mousemove', () => { clearInterval(interval) });
    }, [])

    useEffect(() => {
        if(counter === NUMBER_ITEMS) setActiveIndicator(-1)
        if(counter === NUMBER_ITEMS + 1){
            setRuleTransition('none');
             setCounter(0);
             setActiveIndicator(-1);
        };
    }, [counter])

    return (
        <div className="carousel-wrapper" ref={carousel} style={{ width: width }}>
            <div className="carousel-container">

                <ul
                    className="images-list"
                    style={{
                        transition: ruleTransition,
                        transform: `translateX(${-width * counter}px)`
                    }}
                    onTransitionEnd={(e) => handleTransitionEnd()}
                >
                    <Item
                        src={`./images/img${itemsEnumerator.length - 1}.jpg`}
                        id="cloneStart" width={width}
                    />
                    {itemsEnumerator.map((prom, i) => <Item
                        src={`./images/img${i}.jpg`}
                        key={i}
                        i={i}
                        id=""
                        width={width}
                    />)}
                    <Item
                        src={`./images/img0.jpg`}
                        id="cloneEnd"
                        width={width}
                        numItems={NUMBER_ITEMS}
                    />
                </ul>

                <button className="carousel-btn btn-prev" onClick={(e) => counterChange(-1)}><i className="fas fa-chevron-left"></i></button>
                <button className="carousel-btn btn-next" onClick={(e) => counterChange(1)}><i className="fas fa-chevron-right"></i></button>

                <div className="nav-container">
                    {itemsEnumerator.map((prom, i) => <Indicator
                        key={i}
                        i={i}
                        counter={counter}
                        setCounter={setCounter}
                        ruleTransition={ruleTransition}
                        setRuleTransition={setRuleTransition}
                        TRANSITION={TRANSITION}
                        activeIndicator={activeIndicator}
                        setActiveIndicator={setActiveIndicator}
                    />)}
                </div>

            </div>
        </div>
    )
}