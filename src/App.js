import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import ManageUser from './pages/Admin/ManageUser/ManageUser';
import DashBoard from './pages/Admin/DashBoard/DashBoard';
import ManageProduct from './pages/Admin/ManageProduct/ManageProduct';
import ManageOrder from './pages/Admin/ManageOrder/ManageOrder';
import ManageAuthor from './pages/Admin/ManageAuthor/ManageAuthor';
import ManageRole from './pages/Admin/ManageRole/ManageRole';
import ManageCategory from './pages/Admin/ManageCategory/ManageCategory';
import ManageDiscount from './pages/Admin/ManageDiscount/ManageDiscount';
import HomePage from './pages/User/HomePage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="admins" element={<Admin />}>
                        <Route index element={<DashBoard />} />
                        <Route path="manage-users" element={<ManageUser />} />
                        <Route path="manage-products" element={<ManageProduct />} />
                        <Route path="manage-orders" element={<ManageOrder />} />
                        <Route path="manage-authors" element={<ManageAuthor />} />
                        <Route path="manage-roles" element={<ManageRole />} />
                        <Route path="manage-categories" element={<ManageCategory />} />
                        <Route path="manage-discounts" element={<ManageDiscount />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
