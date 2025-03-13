import '../../pages/Admin/ManageUser/ManageUser.scss';
import Button from 'react-bootstrap/Button';

const TableUser = (props) => {
    return (
        <>
            <table
                className="table table-hover table-bordered"
                style={{ textAlign: 'center', verticalAlign: 'middle' }}
            >
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Vai trò</th>
                        <th scope="col">Ngày tạo</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>
                            <div className="user-info">
                                <div>
                                    <img
                                        className="avatar-user"
                                        src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/06/anh-messi-4K.jpg"
                                        alt="Ảnh đại diện"
                                    />
                                </div>
                                <div className="user-info-detail">
                                    <span className="user-name">Nguyễn Văn A</span>
                                    <span className="user-email">nguyenvana@gmail.com</span>
                                </div>
                            </div>
                        </td>
                        <td>USER</td>
                        <td>13/3/2025</td>
                        <td>
                            <Button variant="outline-info" onClick={() => props.handleClickBtnView()}>
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
                </tbody>
            </table>
        </>
    );
};

export default TableUser;
