import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { FaGem, FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';

const SideBar = ({ collapsed, toggled, handleToggleSidebar }) => {
    const navigate = useNavigate();

    return (
        <Sidebar collapsed={collapsed} toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar}>
            <div
                style={{
                    padding: '24px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
                <span onClick={() => navigate('/')}>
                    <img src={logo} width="208" height="40" alt="Book Shop logo" />
                </span>
            </div>
            <hr style={{ margin: 0 }} />

            {/* Nội dung Sidebar */}
            <div style={{ flex: 1 }}>
                <Menu iconShape="circle">
                    <MenuItem icon={<MdOutlineDashboardCustomize />} component={<Link to="/admins" />}>
                        Bảng điều khiển
                    </MenuItem>
                    <SubMenu icon={<FaGem />} label="Tính năng">
                        <MenuItem component={<Link to="/admins/manage-users" />}>Quản lý người dùng</MenuItem>
                        <MenuItem component={<Link to="/admins/manage-quizzes" />}>Quản lý sản phẩm</MenuItem>
                    </SubMenu>
                </Menu>
            </div>

            {/* Footer */}
            <div
                className="sidebar-btn-wrapper"
                style={{
                    padding: '20px 24px',
                }}
            >
                <a
                    href="https://github.com/nguyendat0908/Project-ReactJS"
                    target="_blank"
                    className="sidebar-btn"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                    <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        GitHub By Đạt
                    </span>
                </a>
            </div>
        </Sidebar>
    );
};

export default SideBar;
