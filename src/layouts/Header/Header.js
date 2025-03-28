import logo from '../../assets/images/Logo.png';
import { CiSearch, CiShoppingBasket } from 'react-icons/ci';
import Button from 'react-bootstrap/Button';
import './Header.scss';
import Search from '../../components/Search/Search';

const Header = () => {
    return (
        <header className="header-main">
            <div className="navigation-content">
                <div className="search-content">
                    <img
                        src={logo}
                        width="208"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <div style={{ display: 'flex', gap: '26px', alignItems: 'center', justifyContent: 'center' }}>
                        <Search />
                        <Button variant="primary" style={{ borderRadius: '16px', height: '42px' }}>
                            Tìm kiếm
                        </Button>
                    </div>
                    <div className="action">
                        <div className="action-cart">
                            <CiShoppingBasket />
                        </div>
                        {/* <div className="action-person">
                            <IoPersonOutline />
                        </div> */}
                        <div className="action-login">
                            <button>Login</button>
                        </div>
                    </div>
                </div>
                <div className="navigation-category"></div>
            </div>
        </header>
    );
};

export default Header;
