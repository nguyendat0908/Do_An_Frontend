import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiFolderPlus } from 'react-icons/fi';
import { getUserById } from '../../../services/UserService';
import ButtonToggle from '../../Button_Toggle/ButtonToggle';

const ModalViewUser = (props) => {
    const { show, setShow, userId } = props;
    const [userData, setUserData] = useState(null);

    const handleClose = () => {
        setShow(false);
    };

    // Call API khi show = true
    useEffect(() => {
        if (show && userId) {
            fetchUserData(userId);
        }
    }, [show, userId]);

    const fetchUserData = async (id) => {
        try {
            const res = await getUserById(id);
            console.log('User data fetched:', res);
            if (res.data.code === 200) {
                setUserData(res.data.data);
            }
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
        }
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
                            <input type="text" className="form-control" disabled value={userData?.name} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" disabled value={userData?.email} />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Địa chỉ</label>
                            <input type="text" className="form-control" disabled value={userData?.address} />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Số điện thoại</label>
                            <input type="text" className="form-control" disabled value={userData?.phone} />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Giới tính</label>
                            <input
                                type="text"
                                className="form-control"
                                disabled
                                value={userData?.gender ?? 'Chưa cập nhật'}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Vai trò</label>
                            <select id="inputState" className="form-select" disabled>
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label label-upload" style={{ pointerEvents: 'none' }}>
                                <FiFolderPlus />
                                Tải ảnh lên
                            </label>
                            <input type="file" hidden disabled />
                        </div>
                        <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                            <label className="form-label">Trạng thái</label>
                            <ButtonToggle isActive={userData?.active} disabled />
                        </div>
                        <div className="col-md-12 img-preview" style={{ position: 'relative', minHeight: '220px' }}>
                            {userData?.imageUrl ? <img src={userData.imageUrl} alt="avatar" /> : <span>Ảnh xem trước</span>}
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
