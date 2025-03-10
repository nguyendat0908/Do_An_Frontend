import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import User from './pages/User/User';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<User />}></Route>
                    <Route path="/admins" element={<Admin />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
