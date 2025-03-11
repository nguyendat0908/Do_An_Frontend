import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalCreateUser = (props) => {
    const { show, setShow } = props;

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Tên người dùng</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Mật khẩu</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Địa chỉ</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Số điện thoại</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Vai trò</label>
                            <select id="inputState" className="form-select">
                                <option selected value="USER">
                                    USER
                                </option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Ảnh đại diện</label>
                            <input type="file" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCreateUser;
