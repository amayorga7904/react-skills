import React from 'react'
import SkillListItem from './SkillListItem'
import './App.css'



export default function SkillList({ skills }) {
    const skillItems = skills.map((skill, index) => <SkillListItem name={skill.name} level={skill.level} key={index}/>)
    console.log(skillItems)
  return (
    <ul className='padding-0'>
        {skillItems}
    </ul>
  )
}
