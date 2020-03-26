
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

    // CHANGE HERE FOR REAL WORLD EXAMPLE

    if (input.src && input.src.length !== 0) {
        return (
            <React.Fragment>
                <ul>
                    {
                        input.src.map((item, index) => {
                            return <li key={index}>{item['ssh_url']}</li>
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