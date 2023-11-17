import SkillList from './SkillList'
import NewSkillForm from './NewSkillForm'
import { useState } from 'react';
import './App.css'

const initialSkills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 4 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 4 },
]

function App() {
  const [skills, setSkills] = useState(initialSkills)
  const [showSkills, setShowSkills] = useState(true)

  function addSkill(skill) {
    setSkills([...skills, skill])
  }

  return (
    <>
     <h1 className='App'>Dev Skills</h1>
     {showSkills &&<SkillList skills={skills} />}
     <hr></hr>
     <NewSkillForm addSkill={addSkill} />
    </>
  )
}

export default App
