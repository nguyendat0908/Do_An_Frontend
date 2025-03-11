import ModalCreateUser from '../../../components/Modal/ModalCreateUser';
import './ManageUser.scss';
import { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';

const ManageUser = () => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    return (
        <div className="manage-user-container">
            <div className="title">Quản lý người dùng</div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn" onClick={() => setShowModalCreateUser(true)}>
                        <CiCirclePlus className="icon-add-user" />
                        Thêm mới người dùng
                    </button>
                </div>
                <div className="table-users-container"></div>
                <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} />
            </div>
        </div>
    );
};
export default ManageUser;
