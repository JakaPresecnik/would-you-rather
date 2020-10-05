import React from 'react'
import { Link } from 'react-router-dom'

export default function NoMatch () {
  return (
    <div className='no-match'>
      <h1>404</h1>
      <p>Page Not found.</p>
      <Link to='/would-you-rather/'>HOME</Link>
    </div>
  )
}
