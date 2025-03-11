import SideBar from '../../layouts/SideBar/SideBar';
import './Admin.scss';
import { BsMenuButtonWide } from 'react-icons/bs';
import { useState } from 'react';
import AdminHeader from '../../layouts/Header/AdminHeader';
import { Outlet } from 'react-router-dom';

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className="admin-content-header">
                    <BsMenuButtonWide className="menu-icon" onClick={() => setCollapsed(!collapsed)} />
                    <AdminHeader />
                </div>
                <hr style={{ margin: 0 }} />
                <div className="admin-content-main">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Admin;
