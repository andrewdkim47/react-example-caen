import React from 'react'

// creates a context object.
// When React renders a component that subscribes to this Context object
// it will read the current context value from the closest matching Provider 
// above it in the tree.
const GlobalSocket = React.createContext()

export default GlobalSocket