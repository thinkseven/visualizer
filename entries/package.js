import React from 'react'
import ReactDOM from 'react-dom'
import Visualizer from '../src/components/package'

pm.getData((error, response) => {
    ReactDOM.render(<Visualizer src={response} />, document.getElementById("root"))
})