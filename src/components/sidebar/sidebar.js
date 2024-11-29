import React from 'react'
import './sidebar.css'

const sidebar = ({ category }) => {
  return (
    <div className="sidebar_container">
      <h4>Категории:</h4>
      {category}
    </div>
  )
}

export default sidebar