
import React from 'react'
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

    // CHANGE START HERE

    if (input.src.devDependencies && input.src.devDependencies.length !== 0) {
        const dependencies = Object.keys(input.src.devDependencies);
        return (
            <React.Fragment>
                <ul>
                    {
                        dependencies.map((key) => {
                            return <li key={key}>{key} : {input.src.devDependencies[key]}</li>;
                        })
                    }
                </ul>
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