import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import '../ManageRole/ManageRole.scss';
import { MdCategory } from 'react-icons/md';
import { useState } from 'react';
import TableCategory from '../../../components/Modal/ModalCategory/TableCategory';
import ModalUpdateCategory from '../../../components/Modal/ModalCategory/ModalUpdateCategory';
import ModalDeleteCategory from '../../../components/Modal/ModalCategory/ModalDeleteCategory';

const ManageCategory = (props) => {
    const [showModalUpdateCategory, setShowModalUpdateCategory] = useState(false);
    const [showModalDeleteCategory, setShowModalDeleteCategory] = useState(false);

    const handleClickBtnUpdate = () => {
        setShowModalUpdateCategory(true);
    };

    const handleClickBtnDelete = () => {
        setShowModalDeleteCategory(true);
    };
    const handleClose = () => {
        alert('Test');
    };
    return (
        <div className="main-content">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div className="title">
                            Quản lý danh mục
                            <span>
                                <MdCategory />
                            </span>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="add-new">
                            <fieldset className="border rounded-3 p-3">
                                <legend className="float-none w-auto px-3">Thêm mới danh mục:</legend>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="Your category name" />
                                    <label>Tên danh mục</label>
                                </div>
                                <div className="more-action">
                                    <Button variant="secondary" onClick={handleClose}>
                                        Hủy bỏ
                                    </Button>
                                    <Button variant="primary">Lưu</Button>
                                </div>
                            </fieldset>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="list-detail">
                <TableCategory
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    handleClickBtnDelete={handleClickBtnDelete}
                />
                <ModalUpdateCategory show={showModalUpdateCategory} setShow={setShowModalUpdateCategory} />
                <ModalDeleteCategory show={showModalDeleteCategory} setShow={setShowModalDeleteCategory} />
            </div>
        </div>
    );
};

export default ManageCategory;
