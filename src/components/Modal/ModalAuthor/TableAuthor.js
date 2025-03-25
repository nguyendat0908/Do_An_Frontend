import '../../../pages/Admin/ManageUser/ManageUser.scss';
import Button from 'react-bootstrap/Button';

const TableAuthor = (props) => {
    return (
        <>
            <table
                className="table table-hover table-bordered"
                style={{ textAlign: 'center', verticalAlign: 'middle' }}
            >
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên tác giả</th>
                        <th scope="col">Quê quán</th>
                        <th scope="col">Số sách trên hệ thống</th>
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
                                    <span className="user-name">Đắc nhân tâm</span>
                                    <span className="user-email">Dale Carnegie</span>
                                </div>
                            </div>
                        </td>
                        <td>Thái Bình</td>
                        <td>100</td>
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

export default TableAuthor;
