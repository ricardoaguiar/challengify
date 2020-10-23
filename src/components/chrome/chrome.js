import React from 'react'
import {Link} from "@reach/router"

import './chrome.css'

const View = ({
  title,
  links,
  actions,
  children
}) => {
  const {text: leftLinkText, ...leftLinkProps} = links.left ?? {}
  const {text: rightLinkText, ...rightLinkProps} = links.right ?? {}
  return (
    <div className='view'>
      <header className='viewHeader'>
        {(leftLinkProps?.to && leftLinkText) && (
          <Link {...leftLinkProps}>
            {leftLinkText}
          </Link>
        )}
        <h1>{title}</h1>
        {(rightLinkProps?.to && rightLinkText) && (
          <Link {...rightLinkProps}>
            {rightLinkText}
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
}
export default View
