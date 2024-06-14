import './App.css'
import Navbar from './component/Navbar'
import Landing from './component/Landing'
import SushiType from './routes/SushiType'
import FishCategory from './routes/FishCategory'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Glossary from './routes/Glossary'




function App() {
  

  return (
    <>
    <BrowserRouter>
    <div className='flex flex-row'>
    <div className='basis-1/5'><Navbar /></div>
    <div className='basis-4/5'>
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/sushitype" element={<SushiType />} />
      <Route path="/fishcategory" element={<FishCategory />} />
      <Route path="/glossary" element={<Glossary />} />
    </Routes>
    </div></div>
    </BrowserRouter>
    </>
  )
}

export default App
