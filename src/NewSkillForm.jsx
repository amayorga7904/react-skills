import React from 'react'
import './NewSkillForm.css'

export default function NewSkillForm() {
  return (
    <form className='NewSkillForm'>
        <label>
            Skill: <input className='input' />
        </label>
        <label>
            Level: 
            <select className='select'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </label>
        <button className='button'>ADD SKILL</button>
    </form>
  )
}
