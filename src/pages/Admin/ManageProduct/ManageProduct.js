import '../ManageUser/ManageUser.scss';

import ModalCreateProduct from '../../../components/Modal/ModalProduct/ModalCreateProduct';
import ModalDeleteProduct from '../../../components/Modal/ModalProduct/ModalDeleteProduct';
import ModalUpdateProduct from '../../../components/Modal/ModalProduct/ModalUpdateProduct';
import ModalViewProduct from '../../../components/Modal/ModalProduct/ModalViewProduct';
import TableProduct from '../../../components/Modal/ModalProduct/TableProduct';

import { useState } from 'react';
import { CiCirclePlus, CiSearch } from 'react-icons/ci';
import { FaBookOpen } from 'react-icons/fa';

const ManageProduct = () => {
    const [showModalCreateProduct, setShowModalCreateProduct] = useState(false);
    const [showModalViewProduct, setShowModalViewProduct] = useState(false);
    const [showModalUpdateProduct, setShowModalUpdateProduct] = useState(false);
    const [showModalDeleteProduct, setShowModalDeleteProduct] = useState(false);

    const handleClickBtnView = () => {
        setShowModalViewProduct(true);
    };

    const handleClickBtnUpdate = () => {
        setShowModalUpdateProduct(true);
    };

    const handleClickBtnDelete = () => {
        setShowModalDeleteProduct(true);
    };

    return (
        <div className="manage-user-container">
            <div className="header-content">
                <div className="title">
                    Quản lý sách
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
                <div className="btn-add-new">
                    <button className="btn" onClick={() => setShowModalCreateProduct(true)}>
                        <CiCirclePlus className="icon-add-user" />
                        Thêm mới sách
                    </button>
                </div>
            </div>
            <div className="users-content">
                <div className="table-users-container">
                    <TableProduct
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                    />
                </div>
                <ModalCreateProduct show={showModalCreateProduct} setShow={setShowModalCreateProduct} />
                <ModalViewProduct show={showModalViewProduct} setShow={setShowModalViewProduct} />
                <ModalUpdateProduct show={showModalUpdateProduct} setShow={setShowModalUpdateProduct} />
                <ModalDeleteProduct show={showModalDeleteProduct} setShow={setShowModalDeleteProduct} />
            </div>
        </div>
    );
};
export default ManageProduct;
