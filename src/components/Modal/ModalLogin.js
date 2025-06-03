import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcGoogle } from 'react-icons/fc';
import './ModalLogin.scss';

const ModalLogin = (props) => {
    const { show, setShow, setShowRegister, setShowForgotPassword } = props;

    const handClose = () => {
        setShow(false);
    };

    const handleShowRegister = () => {
        setShow(false); // Đóng modal đăng nhập
        setShowRegister(true); // Mở modal đăng ký
    };
    const handleShowForgotPassword = () => {
        setShow(false); // Đóng modal đăng nhập
        setShowForgotPassword(true); // Mở modal quên mật khẩu
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
                        <div className="forgot-link">
                            <a onClick={handleShowForgotPassword}>Quên mật khẩu</a>
                        </div>
                        <button className="btn btn-primary">Đăng nhập</button>
                        <p className="modal-footer-title">
                            Bạn không có tài khoản?
                            <a onClick={handleShowRegister}>Đăng ký</a>
                        </p>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default ModalLogin;
