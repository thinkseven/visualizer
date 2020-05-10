
import React from 'react'
import flatten from 'flat';
import person from './domains/person.json';
import address from './domains/address.json';
import mapper from './lib/mapper';

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
            mapper([{ ...address }, { ...person }], input.src).map((domain) => {
              const _flatten = flatten(domain)
              return Object.keys(_flatten).map((key, index) => {
                return <li key={index}>{_flatten[key]}</li>
              })
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
