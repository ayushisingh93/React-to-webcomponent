import React from "react"
import PropTypes from "prop-types"

const Greeting = ({ name }) => {
  return <h1>Hello, {name}</h1>
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
}
export default Greeting;
