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
    const SIZE_USERS = 8;

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [listUsers, setListUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const [searchKeyword, setSearchKeyword] = useState('');

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const selectedPage = +event.selected + 1; // vì react-paginate bắt đầu từ 0
        setCurrentPage(event.selected);
        getListUsers(selectedPage, searchKeyword);
    };

    useEffect(() => {
        getListUsers(1);
    }, []);

    const getListUsers = async (page, filter = '') => {
        let res = await getAllUsers(page, SIZE_USERS, filter);
        if (res.data && res.data.code === 200) {
            setListUsers(res.data.data.result);
            setPageCount(res.data.data.meta.pages);
        } else {
            setListUsers([]);
            setPageCount(0);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        getListUsers(1, searchKeyword); // Tìm từ trang đầu tiên
        setCurrentPage(0);
    };

    const handleClickBtnView = (userId) => {
        setSelectedUserId(userId);
        setShowModalViewUser(true);
    };

    const handleClickBtnUpdate = (user) => {
        setSelectedUser(user);
        setShowModalUpdateUser(true);
    };

    const handleClickBtnDelete = (user) => {
        setSelectedUser(user);
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
                    <form className="form-inline form-search" onSubmit={handleSearch}>
                        <input
                            className="input-search"
                            type="search"
                            placeholder="Tìm kiếm"
                            aria-label="Search"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                        />
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
                        getListUsers={getListUsers}
                        pageCount={pageCount}
                        handlePageClick={handlePageClick}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    getListUsers={getListUsers}
                />
                <ModalViewUser show={showModalViewUser} setShow={setShowModalViewUser} userId={selectedUserId} />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    user={selectedUser}
                    getListUsers={getListUsers}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    user={selectedUser}
                    getListUsers={getListUsers}
                />
            </div>
        </div>
    );
};
export default ManageUser;
