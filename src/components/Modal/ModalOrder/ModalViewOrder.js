import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiFolderPlus } from 'react-icons/fi';

const ModalViewOrder = (props) => {
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className="modal-create-user">
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin sách</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Tên sách</label>
                            <input type="text" className="form-control" disabled />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Ngày xuất bản</label>
                            <input type="date" className="form-control" disabled />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Mô tả chi tiết sách</label>
                            <textarea className="form-control" rows="4" disabled></textarea>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Số lượng</label>
                            <input type="number" className="form-control" disabled />
                        </div>
                        <div className="col-4">
                            <label className="form-label">Giá sách cũ</label>
                            <input type="number" className="form-control" disabled />
                        </div>
                        <div className="col-4">
                            <label className="form-label">Giá sách mới</label>
                            <input type="number" className="form-control" disabled />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Tên tác giả</label>
                            <select id="inputState" className="form-select" disabled>
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Tên danh mục</label>
                            <select id="inputState" className="form-select" disabled>
                                <option value="TINHYEU">TÌNH YÊU</option>
                                <option value="KHOAHOC">KHOA HỌC</option>
                            </select>
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

export default ModalViewOrder;
