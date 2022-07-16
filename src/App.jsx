import { useState } from 'react'
import APIResponseField from './APIResponseField'
import './App.css'
import UserQuestionField from './UserQuestionField'

function App() {
 return(
  <main>
    <UserQuestionField />
    <APIResponseField />
  </main>
 )
}

export default App
