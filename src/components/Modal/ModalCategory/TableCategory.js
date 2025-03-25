import '../../../pages/Admin/ManageUser/ManageUser.scss';
import Button from 'react-bootstrap/Button';

const TableCategory = (props) => {
    return (
        <>
            <table
                className="table table-hover table-bordered"
                style={{ textAlign: 'center', verticalAlign: 'middle', width: '60%', margin: 'auto' }}
            >
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên danh mục</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>Cổ tích</td>
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
                    <tr>
                        <td scope="row">1</td>
                        <td>Cổ tích</td>
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
                    <tr>
                        <td scope="row">1</td>
                        <td>Cổ tích</td>
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
                    <tr>
                        <td scope="row">1</td>
                        <td>Cổ tích</td>
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
                    <tr>
                        <td scope="row">1</td>
                        <td>Cổ tích</td>
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
                    <tr>
                        <td scope="row">1</td>
                        <td>Cổ tích</td>
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

export default TableCategory;
