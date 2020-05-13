
import React from 'react'
import flatten from 'flat';
import './index.css'

const Visualizer = (input) => {
    if (input.src == null || input.src.length === 0) {
        return (
            <React.Fragment>
                <span>
                    Waiting for the json input!!
                </span>
            </React.Fragment>
        )
    }

    // CHANGE HERE FOR REAL WORLD EXAMPLE

    if (input.src && input.src.length !== 0) {
        return (
            <React.Fragment>
                {
                    Object.keys(flatten(input.src)).map((key) => {
                        return <div>{key}</div>
                    })
                }
            </React.Fragment>
        )
    }

    // CHANGE END HERE
    return (
        <React.Fragment>
            <span>
                Waiting for the object which match with the visualization condition!!
        </span>
        </React.Fragment>
    )
}

export default Visualizer;