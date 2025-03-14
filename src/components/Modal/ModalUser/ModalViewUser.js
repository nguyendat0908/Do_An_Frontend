import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiFolderPlus } from 'react-icons/fi';

const ModalViewUser = (props) => {
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className="modal-create-user">
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Tên người dùng</label>
                            <input type="text" className="form-control" disabled/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" disabled/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Địa chỉ</label>
                            <input type="text" className="form-control" disabled/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Số điện thoại</label>
                            <input type="text" className="form-control" disabled/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Vai trò</label>
                            <select id="inputState" className="form-select" disabled>
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label label-upload" style={{ pointerEvents: 'none' }} >
                                <FiFolderPlus />
                                Tải ảnh lên
                            </label>
                            <input type="file" hidden  disabled/>
                        </div>
                        <div className="col-md-12 img-preview">
                            <span>Ảnh xem trước</span>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalViewUser;
