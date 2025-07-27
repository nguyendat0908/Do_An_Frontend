import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/UserService';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const { show, setShow, user } = props;

    const handleClose = () => {
        setShow(false);
    };

    const handleDeleteUser = async () => {
        try {
            const res = await deleteUser(user.id);
            console.log('User data fetched:', res);
            if (res.data.code === 200) {
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
            <Modal show={show} size="lg" onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Xóa người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xóa người dùng có email: <b>{user?.email}</b>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={() => handleDeleteUser()}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDeleteUser;
