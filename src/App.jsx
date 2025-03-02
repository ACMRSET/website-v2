import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Team from './pages/team/Team'
import { Events } from './pages/events/Events'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Team2 from './pages/team/Team2'


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/events" element={<Events />} />


                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
