import SideBar from '../../layouts/SideBar/SideBar';
import './Admin.scss';
import { BsMenuButtonWide } from 'react-icons/bs';
import { useState } from 'react';
import AdminHeader from '../../layouts/Header/AdminHeader';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className={`admin-sidebar ${collapsed ? 'collapsed' : ''}`}>
                <SideBar collapsed={collapsed} />
            </div>
            <div className={`admin-content ${collapsed ? 'collapsed' : ''}`}>
                <div className="admin-content-header">
                    <BsMenuButtonWide className="menu-icon" onClick={() => setCollapsed(!collapsed)} />
                    <AdminHeader />
                </div>
                <hr style={{ margin: 0 }} />
                <div className="admin-content-main">
                    <Outlet />
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Admin;
