import React from 'react'
import {Link} from "@reach/router"

import './viewSkeleton.css'

const ViewSkeleton = ({
  title,
  actions,
  children
}) => (
  <div className='view'>
    <header className='viewHeader'>
      {(actions?.left?.to && actions?.left?.text) && (
        <Link to={actions.left.to} >
          {actions.left.text}
        </Link>
      )}
      <h1>{title}</h1>
      {(actions?.right?.to && actions?.right?.text) && (
        <Link to={actions.right.to} >
          {actions.right.text}
        </Link>
      )}
    </header>
    <div className='viewContent'>
      {children}
    </div>
  </div>
)
export default ViewSkeleton
