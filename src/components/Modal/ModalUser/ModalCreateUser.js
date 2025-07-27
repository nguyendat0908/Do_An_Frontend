import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiFolderPlus } from 'react-icons/fi';
import ButtonToggle from '../../Button_Toggle/ButtonToggle';
import { toast } from 'react-toastify';
import { postCreateUser } from '../../../services/UserService';

const ModalCreateUser = (props) => {
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false);
        setUsername('');
        setEmail('');
        setPassword('');
        setPhone('');
        setImage(null);
        setAddress('');
        setPreviewImage('');
        setRole('USER');
        setIsActive(false);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [role, setRole] = useState('USER');
    const [previewImage, setPreviewImage] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleUploadFile = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
    };

    const handSubmitCreateUser = async () => {
        try {
            let res = await postCreateUser(username, email, password, address, phone, isActive, image);

            if (res.data && res.data.code === 200) {
                toast.success(res.data.message);
                handleClose();
                await props.getListUsers();
            }
        } catch (error) {
            if (error.response && error.response.data) {
                const { message } = error.response.data;

                if (Array.isArray(message)) {
                    message.forEach((msg) => toast.error(msg));
                } else if (typeof message === 'string') {
                    toast.error(message);
                } else {
                    toast.error('Đã xảy ra lỗi không mong muốn');
                }
            } else {
                toast.error('Không thể kết nối tới server!');
            }
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className="modal-create-user">
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Tên người dùng</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Mật khẩu</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Địa chỉ</label>
                            <input
                                type="text"
                                className="form-control"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                            />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Số điện thoại</label>
                            <input
                                type="text"
                                className="form-control"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Vai trò</label>
                            <select
                                id="inputState"
                                className="form-select"
                                value={role}
                                onChange={(event) => setRole(event.target.value)}
                            >
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label label-upload" htmlFor="labelUpload">
                                <FiFolderPlus />
                                Tải ảnh lên
                            </label>
                            <input type="file" hidden id="labelUpload" onChange={(event) => handleUploadFile(event)} />
                        </div>
                        <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                            <label className="form-label">Trạng thái</label>
                            <ButtonToggle isActive={isActive} setIsActive={setIsActive} />
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
                    <Button variant="primary" onClick={() => handSubmitCreateUser()}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCreateUser;
