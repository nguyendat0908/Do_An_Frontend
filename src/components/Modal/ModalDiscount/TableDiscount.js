import '../../../pages/Admin/ManageUser/ManageUser.scss';
import Button from 'react-bootstrap/Button';

const TableDiscount = (props) => {
    return (
        <>
            <table
                className="table table-hover table-bordered"
                style={{ textAlign: 'center', verticalAlign: 'middle'}}
            >
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên mã giảm giá</th>
                        <th scope="col">Kiểu giảm giá</th>
                        <th scope="col">Ngày áp dụng</th>
                        <th scope="col">Ngày kết thúc</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>VIPPROMAX</td>
                        <td>%</td>
                        <td>25/03/2025</td>
                        <td>26/03/2025</td>
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

export default TableDiscount;
