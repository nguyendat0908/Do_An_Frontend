import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import User from './pages/User/User';
import ManageUser from './pages/Admin/ManageUser/ManageUser';
import DashBoard from './pages/Admin/DashBoard/DashBoard';
import ManageProduct from './pages/Admin/ManageProduct/ManageProduct';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<User />}></Route>
                    <Route path="admins" element={<Admin />}>
                        <Route index element={<DashBoard />} />
                        <Route path="manage-users" element={<ManageUser />} />
                        <Route path="manage-products" element={<ManageProduct />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
