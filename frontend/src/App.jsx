import './App.css'
import Navbar from './component/Navbar'
import Landing from './component/Landing'
import SushiType from './routes/SushiType'
import Fish from './routes/Fish'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Glossary from './routes/Glossary'




function App() {
  

  return (
    <>
    <BrowserRouter>
    {/* <Navbar /> */}
    <div>
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/sushitype" element={<SushiType />} />
      <Route path="/fish" element={<Fish />} />
      <Route path="/glossary" element={<Glossary />} />

    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
