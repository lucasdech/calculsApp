import { Routes, Route } from 'react-router-dom'
import { Aditions } from './maths/Aditions'
import { Soustractions } from './maths/Soustractions'
import { HomePage } from './maths/HomePage'
import { MathsLanding } from './maths/MathsLanding'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/maths" element={<MathsLanding />} />
    </Routes>
  )
}

export default App
