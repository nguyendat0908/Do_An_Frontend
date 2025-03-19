import '../ManageUser/ManageUser.scss';



import { useState } from 'react';
import { CiCirclePlus, CiSearch } from 'react-icons/ci';
import { FaPencilAlt } from 'react-icons/fa';
import TableAuthor from '../../../components/Modal/ModalAuthor/TableAuthor';
import ModalCreateAuthor from '../../../components/Modal/ModalAuthor/ModalCreateAuthor';
import ModalViewAuthor from '../../../components/Modal/ModalAuthor/ModalViewAuthor';
import ModalUpdateAuthor from '../../../components/Modal/ModalAuthor/ModalUpdateAuthor';
import ModalDeleteAuthor from '../../../components/Modal/ModalAuthor/ModalDeleteAuthor';

const ManageAuthor = () => {
    const [showModalCreateAuthor, setShowModalCreateAuthor] = useState(false);
    const [showModalViewAuthor, setShowModalViewAuthor] = useState(false);
    const [showModalUpdateAuthor, setShowModalUpdateAuthor] = useState(false);
    const [showModalDeleteAuthor, setShowModalDeleteAuthor] = useState(false);

    const handleClickBtnView = () => {
        setShowModalViewAuthor(true);
    };

    const handleClickBtnUpdate = () => {
        setShowModalUpdateAuthor(true);
    };

    const handleClickBtnDelete = () => {
        setShowModalDeleteAuthor(true);
    };

    return (
        <div className="manage-user-container">
            <div className="header-content">
                <div className="title">
                    Quản lý tác giả
                    <span>
                        100 <FaPencilAlt />
                    </span>
                </div>
                <nav className="navbar navbar-light bg-light navbar-search">
                    <CiSearch className="icon-search" />
                    <form className="form-inline form-search">
                        <input className="input-search" type="search" placeholder="Tìm kiếm" aria-label="Search" />
                    </form>
                </nav>
                <div className="btn-add-new">
                    <button className="btn" onClick={() => setShowModalCreateAuthor(true)}>
                        <CiCirclePlus className="icon-add-user" />
                        Thêm mới tác giả
                    </button>
                </div>
            </div>
            <div className="users-content">
                <div className="table-users-container">
                    <TableAuthor
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                    />
                </div>
                <ModalCreateAuthor show={showModalCreateAuthor} setShow={setShowModalCreateAuthor} />
                <ModalViewAuthor show={showModalViewAuthor} setShow={setShowModalViewAuthor} />
                <ModalUpdateAuthor show={showModalUpdateAuthor} setShow={setShowModalUpdateAuthor} />
                <ModalDeleteAuthor show={showModalDeleteAuthor} setShow={setShowModalDeleteAuthor} />
            </div>
        </div>
    );
};
export default ManageAuthor;
