import React from 'react'
import ReactDOM from 'react-dom'
import Visualizer from '../src/components/github'

pm.getData((error, response) => {
    ReactDOM.render(<Visualizer src={response} />, document.getElementById("root"))
})