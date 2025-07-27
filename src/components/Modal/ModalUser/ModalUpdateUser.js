import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonToggle from '../../Button_Toggle/ButtonToggle';
import { toast } from 'react-toastify';
import { updateUser } from '../../../services/UserService';

const ModalUpdateUser = (props) => {
    const { show, setShow, user } = props;

    const [isActive, setIsActive] = useState(false);

    const handleClose = () => {
        setIsActive(false); // Reset trạng thái khi đóng modal
        setShow(false);
    };

    useEffect(() => {
        if (user) {
            setIsActive(user.active); // Lấy trạng thái khi modal mở
        }
    }, [user]);

    const handleUpdateUser = async () => {
        try {
            let res = await updateUser(user.id, isActive);
            if (res.data && res.data.code === 200) {
                toast.success(res.data.message);
                handleClose();
                await props.getListUsers();
            }
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className="modal-create-user">
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-12" style={{ display: 'flex', alignItems: 'center' }}>
                            <label className="form-label">Trạng thái</label>
                            <ButtonToggle isActive={isActive} setIsActive={setIsActive} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => handleUpdateUser()}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalUpdateUser;
