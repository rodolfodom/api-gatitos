import { createRoot } from 'react-dom/client'
import App from './src/App'
import React from 'react'
const root = createRoot(document.getElementById('app'))

// eslint-disable-next-line react/react-in-jsx-scope
root.render(<App/>)
