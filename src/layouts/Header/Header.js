import logo from '../../assets/images/Logo.png';
import { CiShoppingBasket } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import Button from 'react-bootstrap/Button';
import './Header.scss';
import Search from '../../components/Search/Search';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import ModalLogin from '../../components/Modal/ModalLogin';
import ModalRegister from '../../components/Modal/ModalRegister';
import ModalForgotPassword from '../../components/Modal/ModalForgotPassword';

const Header = () => {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showModalRegister, setShowModalRegister] = useState(false);
    const [showModalForgotPassword, setShowModalForgotPassword] = useState(false);

    const handleShowLogin = () => {
        setShowModalLogin(true);
        setShowModalRegister(false);
        setShowModalForgotPassword(false);
    };
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
                        style={{ cursor: 'pointer' }}
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
                        {/* <Tippy
                            interactive={true}
                            visible={visible}
                            onClickOutside={hide}
                            render={(attrs) => (
                                <div className="show-info" tabIndex="-1" {...attrs}>
                                    <IoPersonOutline className="info-icon" />
                                    <div className="info-buy">
                                        <p>Mua hàng</p>
                                        <a>Lịch sử mua hàng</a>
                                    </div>
                                    <div className="info-myAccount">
                                        <p>Tài khoản</p>
                                        <a>Tài khoản của tôi</a>
                                    </div>
                                    <div className="logout">
                                        <a>Đăng xuất</a>
                                    </div>
                                </div>
                            )}
                        >
                            <div className="action-person" onClick={visible ? hide : show}>
                                <IoPersonOutline />
                            </div>
                        </Tippy> */}
                        <div className="action-login">
                            <button onClick={handleShowLogin}>Đăng nhập</button>
                            <ModalLogin
                                show={showModalLogin}
                                setShow={setShowModalLogin}
                                setShowRegister={setShowModalRegister}
                                setShowForgotPassword={setShowModalForgotPassword}
                            />
                            <ModalRegister
                                show={showModalRegister}
                                setShow={setShowModalRegister}
                                setShowLogin={setShowModalLogin}
                            />
                            <ModalForgotPassword show={showModalForgotPassword} setShow={setShowModalForgotPassword} />
                        </div>
                    </div>
                </div>
                <div className="navigation-category">
                    <div className="category-items">
                        <a className="category-items-link">Văn học</a>
                    </div>
                    <div className="category-items">
                        <a className="category-items-link">Tâm lý - Kỹ năng sống</a>
                    </div>
                    <div className="category-items">
                        <a className="category-items-link">Khoa học - Lịch sử</a>
                    </div>
                    <div className="category-items">
                        <a className="category-items-link">Thiếu nhi</a>
                    </div>
                    <div className="category-items">
                        <a className="category-items-link">Tâm linh - Triết học</a>
                    </div>
                    <div className="category-items">
                        <a className="category-items-link">Truyện tranh - Manga</a>
                    </div>
                    <div className="category-items">
                        <a className="category-items-link">Đầu tư</a>
                    </div>
                    <Tippy
                        placement="bottom-end"
                        interactive={true}
                        render={(attrs) => (
                            <div className="show-more-category" tabIndex="-1" {...attrs}>
                                <a className="more-category-items-link">Công nghệ lập trình</a>
                                <a className="more-category-items-link">Xem tất cả</a>
                            </div>
                        )}
                    >
                        <div className="category-items">
                            <div className="category-items-title">Xem thêm</div>
                            <div className="category-items-icon">
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </Tippy>
                </div>
            </div>
        </header>
    );
};

export default Header;
