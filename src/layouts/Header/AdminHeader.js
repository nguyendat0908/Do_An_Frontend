import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const AdminHeader = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                    <Nav className="me-auto">
                        <NavDropdown title="Xem thêm" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Đăng xuất</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
            </Container>
        </Navbar>
    );
};

export default AdminHeader;
