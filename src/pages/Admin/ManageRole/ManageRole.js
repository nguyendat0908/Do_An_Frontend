import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './ManageRole.scss';
import { FaLock } from 'react-icons/fa';
import { useState } from 'react';
import TableRole from '../../../components/Modal/ModalRole/TableRole';
import ModalUpdateRole from '../../../components/Modal/ModalRole/ModalUpdateRole';
import ModalDeleteRole from '../../../components/Modal/ModalRole/ModalDeleteRole';

const ManageRole = (props) => {
    const [showModalUpdateRole, setShowModalUpdateRole] = useState(false);
    const [showModalDeleteRole, setShowModalDeleteRole] = useState(false);

    const handleClickBtnUpdate = () => {
        setShowModalUpdateRole(true);
    };

    const handleClickBtnDelete = () => {
        setShowModalDeleteRole(true);
    };
    const handleClose = () => {
        alert('Test');
    };
    return (
        <div className="main-content">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div className="title">
                            Quản lý vai trò
                            <span>
                                <FaLock />
                            </span>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="add-new">
                            <fieldset className="border rounded-3 p-3">
                                <legend className="float-none w-auto px-3">Thêm mới vai trò:</legend>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="Your role name" />
                                    <label>Tên</label>
                                </div>
                                <div className="form-floating">
                                    <input type="text" className="form-control" placeholder="Your role description" />
                                    <label>Mô tả</label>
                                </div>
                                <div className="more-action">
                                    <Button variant="secondary" onClick={handleClose}>
                                        Hủy bỏ
                                    </Button>
                                    <Button variant="primary">Lưu</Button>
                                </div>
                            </fieldset>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="list-detail">
                <TableRole handleClickBtnUpdate={handleClickBtnUpdate} handleClickBtnDelete={handleClickBtnDelete} />
                <ModalUpdateRole show={showModalUpdateRole} setShow={setShowModalUpdateRole} />
                <ModalDeleteRole show={showModalDeleteRole} setShow={setShowModalDeleteRole} />
            </div>
        </div>
    );
};

export default ManageRole;
