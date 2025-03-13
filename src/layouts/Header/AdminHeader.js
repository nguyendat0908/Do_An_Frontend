import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoPersonOutline } from 'react-icons/io5';
import '../../pages/Admin/ManageUser/ManageUser.scss';

const AdminHeader = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Nav className="me-auto">
                    <NavDropdown title={<IoPersonOutline size={22} />} id="basic-nav-dropdown" align="end">
                        <NavDropdown.Item href="#action/3.1">Đăng xuất</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AdminHeader;
