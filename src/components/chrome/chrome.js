import React from 'react'
import {Link} from "@reach/router"

import './chrome.css'

const View = ({
  title,
  links,
  actions,
  children
}) => (
  <div className='view'>
    <header className='viewHeader'>
      {(links?.left?.to && links?.left?.text) && (
        <Link to={links.left.to} >
          {links.left.text}
        </Link>
      )}
      <h1>{title}</h1>
      {(links?.right?.to && links?.right?.text) && (
        <Link to={links.right.to} >
          {links.right.text}
        </Link>
      )}
    </header>
    <div className='viewContent'>
      {children}
    </div>
    {actions && (
      <footer className='viewActions'>
        {actions}
      </footer>
    )}
  </div>
)
export default View
