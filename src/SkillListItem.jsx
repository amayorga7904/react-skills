import React from 'react'
import './SkillListItem.css'

export default function SkillListItem( {name, level} ) {
  return (
      <li className='SkillListItem'>
        {name}  <div className='level'> Level {level}</div>
      </li>
  )
}
