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
                    <img src={logo} width="208" height="40" alt="React Bootstrap logo" />
                </span>
            </div>
            <hr style={{ margin: 0 }} />

            {/* Nội dung Sidebar */}
            <div style={{ flex: 1 }}>
                <Menu iconShape="circle">
                    <MenuItem icon={<MdOutlineDashboardCustomize />}>
                        Bảng điều khiển
                        <Link to="/admins" />
                    </MenuItem>
                    <SubMenu icon={<FaGem />} label="Tính năng">
                        <MenuItem>
                            Quản lý người dùng
                            <Link to="/admins/manage-users" />
                        </MenuItem>
                        <MenuItem>
                            Quản lý sản phẩm
                            <Link to="/admins/manage-quizzes" />
                        </MenuItem>
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
