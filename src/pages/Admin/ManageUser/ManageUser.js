import ModalCreateUser from '../../../components/Modal/ModalUser/ModalCreateUser';
import ModalDeleteUser from '../../../components/Modal/ModalUser/ModalDeleteUser';
import ModalUpdateUser from '../../../components/Modal/ModalUser/ModalUpdateUser';
import ModalViewUser from '../../../components/Modal/ModalUser/ModalViewUser';
import TableUser from '../../../components/Modal/ModalUser/TableUser';
import { useEffect, useState } from 'react';
import './ManageUser.scss';
import { CiCirclePlus, CiSearch } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { getAllUsers } from '../../../services/UserService';

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [listUsers, setListUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        getListUsers();
    }, []);

    const getListUsers = async () => {
        let res = await getAllUsers();
        console.log('Check res get all users: ', res);
        if (res.data && res.data.code === 200) {
            setListUsers(res.data.data.result);
        } else {
            setListUsers([]);
        }
    };

    const handleClickBtnView = (userId) => {
        setSelectedUserId(userId);
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
                <nav className="navbar navbar-light bg-light navbar-search">
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
                        listUsers={listUsers}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    getListUsers={getListUsers}
                />
                <ModalViewUser show={showModalViewUser} setShow={setShowModalViewUser} userId={selectedUserId} />
                <ModalUpdateUser show={showModalUpdateUser} setShow={setShowModalUpdateUser} />
                <ModalDeleteUser show={showModalDeleteUser} setShow={setShowModalDeleteUser} />
            </div>
        </div>
    );
};
export default ManageUser;
