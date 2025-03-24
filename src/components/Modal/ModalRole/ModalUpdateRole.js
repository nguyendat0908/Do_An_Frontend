import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiFolderPlus } from 'react-icons/fi';

const ModalUpdateRole = (props) => {
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false);
        setName('');
        setDescription('');
        setPublication('');
        setQuantity('');
        setNewPrice('');
        setOldPrice('');
        setAuthor('A');
        setCategory('TÌNH YÊU');
        setPreviewImage('');
        setImage('');
    };

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [publication, setPublication] = useState('');
    const [quantity, setQuantity] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [author, setAuthor] = useState('A');
    const [category, setCategory] = useState('TÌNH YÊU');
    const [previewImage, setPreviewImage] = useState('');
    const [image, setImage] = useState('');

    const handleUploadFile = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className="modal-create-user">
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật vai trò</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label">Tên vai trò</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Mô tả chi tiết vai trò</label>
                            <input
                                className="form-control"
                                type="text"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
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

export default ModalUpdateRole;
