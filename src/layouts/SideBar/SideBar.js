import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { FaGem, FaGithub, FaUsers, FaBookOpen, FaPencilAlt } from 'react-icons/fa';
import { BiPackage } from 'react-icons/bi';
import { MdCategory } from 'react-icons/md';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { SiAuthelia } from 'react-icons/si';
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
                        <MenuItem component={<Link to="/admins/manage-users" />}>
                            <FaUsers style={{ marginRight: '10px' }} />
                            Quản lý người dùng
                        </MenuItem>
                        <MenuItem component={<Link to="/admins/manage-products" />}>
                            <FaBookOpen style={{ marginRight: '10px' }} />
                            Quản lý sản phẩm
                        </MenuItem>
                        <MenuItem component={<Link to="/admins/manage-authors" />}>
                            <FaPencilAlt style={{ marginRight: '10px' }} />
                            Quản lý tác giả
                        </MenuItem>
                        <MenuItem component={<Link to="/admins/manage-orders" />}>
                            <BiPackage style={{ marginRight: '10px' }} />
                            Quản lý đơn hàng
                        </MenuItem>
                        <MenuItem component={<Link to="/admins/manage-roles" />}>
                            <SiAuthelia style={{ marginRight: '10px' }} />
                            Quản lý vai trò
                        </MenuItem>
                        <MenuItem component={<Link to="/admins/manage-categories" />}>
                            <MdCategory style={{ marginRight: '10px' }} />
                            Quản lý danh mục
                        </MenuItem>
                        <MenuItem component={<Link to="/admins/manage-discounts" />}>
                            <RiDiscountPercentFill style={{ marginRight: '10px' }} />
                            Quản lý mã giảm giá
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
