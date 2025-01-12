import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'




function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Home />
            <h1 className="text-3xl font-bold underline">
                Hello acm pepls
            </h1>
        </>
    )
}

export default App
