import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcGoogle } from 'react-icons/fc';
import './ModalLogin.scss';

const ModalRegister = (props) => {
    const { show, setShow, setShowLogin } = props;

    const handClose = () => {
        setShow(false);
    };

    const handleShowLogin = () => {
        setShow(false); // Đóng modal đăng ký
        setShowLogin(true); // Mở modal đăng nhập
    };

    return (
        <Modal show={show} onHide={handClose} centered>
            <div className="modal-overview">
                <h3>Chào mừng trở lại!</h3>
                <div className="modal-login-sso">
                    <button>
                        <span>
                            <FcGoogle style={{ fontSize: '35px' }} />
                        </span>
                        <span>Đăng nhập với Google</span>
                    </button>
                </div>
                <div className="modal-separate">
                    <div style={{ width: '165px', height: '1px', backgroundColor: '#e1e3ea' }}></div>
                    Hoặc
                    <div style={{ width: '165px', height: '1px', backgroundColor: '#e1e3ea' }}></div>
                </div>
                <div className="modal-login-normal">
                    <form className="form-login">
                        <div className="col-md-12" style={{ marginBottom: '20px' }}>
                            <label className="form-label">Tên</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập tên của bạn"
                                style={{ outline: 'none', boxShadow: 'none' }}
                            />
                        </div>
                        <div className="col-md-12" style={{ marginBottom: '20px' }}>
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                style={{ outline: 'none', boxShadow: 'none' }}
                            />
                        </div>
                        <div className="col-md-12" style={{ marginBottom: '20px' }}>
                            <label className="form-label">Mật khẩu</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Mật khẩu"
                                style={{ outline: 'none', boxShadow: 'none' }}
                            />
                        </div>
                        <button className="btn btn-primary">Đăng ký</button>
                        <div className="info-bonus">
                            <p>Đồng ý với điều khoản sử dụng và thông báo về quyền riêng tư của BookShop.</p>
                        </div>
                        <p className="modal-footer-title">
                            Bạn đã có tài khoản?
                            <a onClick={handleShowLogin}>Đăng nhập</a>
                        </p>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default ModalRegister;
