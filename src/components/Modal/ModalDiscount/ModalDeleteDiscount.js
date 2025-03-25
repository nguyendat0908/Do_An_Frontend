import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDeleteDiscount = (props) => {
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false);
    };

    return (
        <>
            <Modal show={show} size="lg" onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Xóa mã giảm giá</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xóa mã giảm giá có tên: <b>USER</b>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDeleteDiscount;
