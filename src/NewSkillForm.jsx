import React from 'react'
import './NewSkillForm.css'
import { useState } from 'react'

const startSkill = {
    name: '',
    level: 3
}

export default function NewSkillForm({ addSkill }) {
  const [skillData, setSkillData] = useState(startSkill)

  function handleAddSkill(e) {
    e.preventDefault()
    addSkill(skillData)
    setSkillData(startSkill)
  }
  
  function handleChange(e) {
    setSkillData({...skillData, [e.target.name]: e.target.value})
  }

  return (
    <form 
    className='NewSkillForm'
    onSubmit={handleAddSkill}
    >
        <label>
            Skill: <input
            className='input' 
            name='name'
            value={skillData.name}
            onChange={handleChange}
            />
        </label>
        <label>
            Level: 
            <select 
            className='select'
            name='level'
            value={skillData.level}
            onChange={handleChange}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </label>
        <button 
        className='button'
        >ADD SKILL</button>
    </form>
  )
}
