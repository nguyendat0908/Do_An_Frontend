import '../ManageUser/ManageUser.scss';

import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaBookOpen } from 'react-icons/fa';

import ModalViewOrder from '../../../components/Modal/ModalOrder/ModalViewOrder';
import ModalUpdateOrder from '../../../components/Modal/ModalOrder/ModalUpdateOrder';
import ModalDeleteOrder from '../../../components/Modal/ModalOrder/ModalDeleteOrder';
import TableOrder from '../../../components/Modal/ModalOrder/TableOrder';

const ManageOrder = () => {
    const [showModalViewOrder, setShowModalViewOrder] = useState(false);
    const [showModalUpdateOrder, setShowModalUpdateOrder] = useState(false);
    const [showModalDeleteOrder, setShowModalDeleteOrder] = useState(false);

    const handleClickBtnView = () => {
        setShowModalViewOrder(true);
    };

    const handleClickBtnUpdate = () => {
        setShowModalUpdateOrder(true);
    };

    const handleClickBtnDelete = () => {
        setShowModalDeleteOrder(true);
    };

    return (
        <div className="manage-user-container">
            <div className="header-content">
                <div className="title">
                    Quản lý đơn hàng
                    <span>
                        100 <FaBookOpen />
                    </span>
                </div>
                <nav className="navbar navbar-light bg-light navbar-search">
                    <CiSearch className="icon-search" />
                    <form className="form-inline form-search">
                        <input className="input-search" type="search" placeholder="Tìm kiếm" aria-label="Search" />
                    </form>
                </nav>
            </div>
            <div className="users-content">
                <div className="table-users-container">
                    <TableOrder
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                    />
                </div>
                <ModalViewOrder show={showModalViewOrder} setShow={setShowModalViewOrder} />
                <ModalUpdateOrder show={showModalUpdateOrder} setShow={setShowModalUpdateOrder} />
                <ModalDeleteOrder show={showModalDeleteOrder} setShow={setShowModalDeleteOrder} />
            </div>
        </div>
    );
};
export default ManageOrder;
