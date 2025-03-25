import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiFolderPlus } from 'react-icons/fi';

const ModalUpdateDiscount = (props) => {
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false);
    };

    const [name, setName] = useState('');

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className="modal-create-user">
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật mã giảm giá</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="d-flex gap-3">
                            <div className="form-floating mb-3 flex-grow-1">
                                <input type="number" className="form-control" placeholder="Your quantity" />
                                <label>Số lượng</label>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input type="date" className="form-control" />
                                <label>Ngày kết thúc</label>
                            </div>
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

export default ModalUpdateDiscount;
