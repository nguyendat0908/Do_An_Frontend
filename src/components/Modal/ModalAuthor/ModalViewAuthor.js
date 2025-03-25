import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiFolderPlus } from 'react-icons/fi';

const ModalViewAuthor = (props) => {
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className="modal-create-user">
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin tác giả</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Tên tác giả</label>
                            <input type="text" className="form-control" disabled />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Quê quán</label>
                            <input type="text" className="form-control" disabled />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Mô tả về tác giả</label>
                            <textarea className="form-control" rows="4" disabled></textarea>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Thể loại</label>
                            <input type="text" className="form-control" disabled />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Số lượng sách trên cửa hàng</label>
                            <input type="number" className="form-control" disabled />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label label-upload" style={{ pointerEvents: 'none' }}>
                                <FiFolderPlus />
                                Tải ảnh lên
                            </label>
                            <input type="file" hidden disabled />
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

export default ModalViewAuthor;
