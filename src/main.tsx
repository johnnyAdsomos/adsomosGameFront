import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './layout/Main'
import Login from './pages/Login'
import Ranking from './pages/Ranking';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Ranking />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
