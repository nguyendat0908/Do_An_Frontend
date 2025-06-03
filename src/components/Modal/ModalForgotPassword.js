
import Modal from 'react-bootstrap/Modal';
import './ModalLogin.scss';

const ModalForgotPassword = (props) => {
    const { show, setShow } = props;

    const handClose = () => {
        setShow(false);
    };

    return (
        <Modal show={show} onHide={handClose} centered>
            <div className="modal-overview">
                <h3>Đặt lại mật khẩu của bạn!</h3>

                <div className="modal-login-normal">
                    <form className="form-login">
                        <div className="col-md-12" style={{ marginBottom: '20px' }}>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Nhập email của bạn"
                                style={{ outline: 'none', boxShadow: 'none' }}
                            />
                        </div>
                        <div>
                            <p>Bạn sẽ nhận được mật khẩu mới trong email!</p>
                        </div>
                        <button className="btn btn-primary">Gửi</button>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default ModalForgotPassword;
