import '../../../pages/Admin/ManageUser/ManageUser.scss';
import Button from 'react-bootstrap/Button';

const TableRole = (props) => {
    return (
        <>
            <table
                className="table table-hover table-bordered"
                style={{ textAlign: 'center', verticalAlign: 'middle' }}
            >
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên vai trò</th>
                        <th scope="col">Mô tả vai trò</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>ADMIN</td>
                        <td>Admin có vai trò toàn quyền trong hệ thống.</td>
                        <td>
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

export default TableRole;
