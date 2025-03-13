import ModalCreateUser from '../../../components/Modal/ModalCreateUser';
import ModalDeleteUser from '../../../components/Modal/ModalDeleteUser';
import ModalUpdateUser from '../../../components/Modal/ModalUpdateUser';
import ModalViewUser from '../../../components/Modal/ModalViewUser';
import TableUser from '../../../components/Modal/TableUser';
import './ManageUser.scss';
import { useState } from 'react';
import { CiCirclePlus, CiSearch } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';

const ManageUser = () => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const handleClickBtnView = () => {
        setShowModalViewUser(true);
    };

    const handleClickBtnUpdate = () => {
        setShowModalUpdateUser(true);
    };

    const handleClickBtnDelete = () => {
        setShowModalDeleteUser(true);
    };

    return (
        <div className="manage-user-container">
            <div className="header-content">
                <div className="title">
                    Quản lý người dùng
                    <span>
                        100 <IoPersonOutline />
                    </span>
                </div>
                <nav class="navbar navbar-light bg-light navbar-search">
                    <CiSearch className="icon-search" />
                    <form className="form-inline form-search">
                        <input className="input-search" type="search" placeholder="Tìm kiếm" aria-label="Search" />
                    </form>
                </nav>
                <div className="btn-add-new">
                    <button className="btn" onClick={() => setShowModalCreateUser(true)}>
                        <CiCirclePlus className="icon-add-user" />
                        Thêm mới người dùng
                    </button>
                </div>
            </div>
            <div className="users-content">
                <div className="table-users-container">
                    <TableUser
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                    />
                </div>
                <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} />
                <ModalViewUser show={showModalViewUser} setShow={setShowModalViewUser} />
                <ModalUpdateUser show={showModalUpdateUser} setShow={setShowModalUpdateUser} />
                <ModalDeleteUser show={showModalDeleteUser} setShow={setShowModalDeleteUser} />
            </div>
        </div>
    );
};
export default ManageUser;
