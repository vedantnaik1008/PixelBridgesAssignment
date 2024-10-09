import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from '../routes'

function App() {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App
