import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './layout/Main'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Ranking from './pages/Ranking'
import Quest from './pages/Quest'
import SignUp from './pages/SignUp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Ranking />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/quest" element={<Quest />} />
                <Route path="/signUp" element={<SignUp />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
