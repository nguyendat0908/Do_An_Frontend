import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiFolderPlus } from 'react-icons/fi';

const ModalUpdateAuthor = (props) => {
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
                    <Modal.Title>Cập nhật sách</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label">Tên sách</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Mô tả chi tiết sách</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            ></textarea>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Số lượng</label>
                            <input
                                type="number"
                                className="form-control"
                                value={quantity}
                                onChange={(event) => setQuantity(event.target.value)}
                            />
                        </div>
                        <div className="col-4">
                            <label className="form-label">Giá sách cũ</label>
                            <input
                                type="number"
                                className="form-control"
                                value={oldPrice}
                                onChange={(event) => setOldPrice(event.target.value)}
                            />
                        </div>
                        <div className="col-4">
                            <label className="form-label">Giá sách mới</label>
                            <input
                                type="number"
                                className="form-control"
                                value={newPrice}
                                onChange={(event) => setNewPrice(event.target.value)}
                            />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label label-upload" htmlFor="labelUpload">
                                <FiFolderPlus />
                                Tải ảnh lên
                            </label>
                            <input type="file" hidden id="labelUpload" onChange={(event) => handleUploadFile(event)} />
                        </div>
                        <div className="col-md-12 img-preview">
                            {previewImage ? <img src={previewImage} /> : <span>Ảnh xem trước</span>}
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

export default ModalUpdateAuthor;
