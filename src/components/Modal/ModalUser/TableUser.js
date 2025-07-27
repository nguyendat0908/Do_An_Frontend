import '../../../pages/Admin/ManageUser/ManageUser.scss';
import Button from 'react-bootstrap/Button';
import { FaRegSadCry } from 'react-icons/fa';
import { useState } from 'react';

const TableUser = (props) => {
    const { listUsers } = props;
    return (
        <>
            <table
                className="table table-hover table-bordered"
                style={{ textAlign: 'center', verticalAlign: 'middle' }}
            >
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên người dùng</th>
                        <th scope="col">Vai trò</th>
                        <th scope="col">Ngày tạo</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td scope="row">{index + 1}</td>
                                    <td>
                                        <div className="user-info">
                                            <div>
                                                <img className="avatar-user" src={item.avatar} />
                                            </div>
                                            <div className="user-info-detail">
                                                <span className="user-name">{item.name}</span>
                                                <span className="user-email">{item.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>USER</td>
                                    <td>{new Date(item.createdAt).toLocaleDateString('vi-VN')}</td>
                                    <td>
                                        <Button variant="outline-info" onClick={() => props.handleClickBtnView(item.id)}>
                                            Xem
                                        </Button>
                                        <Button
                                            variant="outline-info"
                                            style={{ margin: '20px' }}
                                            onClick={() => props.handleClickBtnUpdate()}
                                        >
                                            Sửa
                                        </Button>
                                        <Button variant="outline-info" onClick={() => props.handleClickBtnDelete()}>
                                            Xóa
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            {listUsers && listUsers.length === 0 && (
                <div className="no-data-message">
                    <FaRegSadCry style={{ fontSize: '20px' }} />
                    Không có dữ liệu ...
                </div>
            )}
        </>
    );
};

export default TableUser;
