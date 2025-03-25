import { Button } from 'react-bootstrap';
import Select from 'react-select';
import Accordion from 'react-bootstrap/Accordion';
import '../ManageRole/ManageRole.scss';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { useState } from 'react';
import TableDiscount from '../../../components/Modal/ModalDiscount/TableDiscount';
import ModalUpdateDiscount from '../../../components/Modal/ModalDiscount/ModalUpdateDiscount';
import ModalDeleteDiscount from '../../../components/Modal/ModalDiscount/ModalDeleteDiscount';

const options = [
    { value: 'TIENMAT', label: 'Tiền mặt' },
    { value: 'PHANTRAM', label: '%' },
];

const ManageDiscount = (props) => {
    const [showModalUpdateDiscount, setShowModalUpdateDiscount] = useState(false);
    const [showModalDeleteDiscount, setShowModalDeleteDiscount] = useState(false);

    const handleClickBtnUpdate = () => {
        setShowModalUpdateDiscount(true);
    };

    const handleClickBtnDelete = () => {
        setShowModalDeleteDiscount(true);
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
                            Quản lý mã giảm giá
                            <span>
                                <RiDiscountPercentFill />
                            </span>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="add-new">
                            <fieldset className="border rounded-3 p-3">
                                <legend className="float-none w-auto px-3">Thêm mới mã giảm giá:</legend>

                                <div className="d-flex gap-3 align-items-center">
                                    <div className="form-floating flex-grow-1">
                                        <input type="text" className="form-control" placeholder="Your discount name" />
                                        <label>Tên mã giảm giá</label>
                                    </div>
                                    <div className="flex-grow-1 mb-3 ">
                                        <label className="form-label">Kiểu giảm giá</label>
                                        <Select options={options} placeholder={'Chọn ...'} />
                                    </div>
                                </div>

                                <div className="d-flex gap-3">
                                    <div className="form-floating mb-3 flex-grow-1">
                                        <input type="number" className="form-control" placeholder="Your order value" />
                                        <label>Giá trị đơn hàng tối thiểu</label>
                                    </div>

                                    <div className="form-floating mb-3 flex-grow-1" style={{ zIndex: '0' }}>
                                        <input type="number" className="form-control" placeholder="Your quantity" />
                                        <label>Số lượng</label>
                                    </div>
                                </div>

                                <div className="d-flex gap-3">
                                    <div className="form-floating flex-grow-1">
                                        <input type="date" className="form-control" />
                                        <label>Ngày áp dụng</label>
                                    </div>
                                    <div className="form-floating flex-grow-1">
                                        <input type="date" className="form-control" />
                                        <label>Ngày kết thúc</label>
                                    </div>
                                </div>

                                <div className="more-action mt-3">
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
                <TableDiscount
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    handleClickBtnDelete={handleClickBtnDelete}
                />
                <ModalUpdateDiscount show={showModalUpdateDiscount} setShow={setShowModalUpdateDiscount} />
                <ModalDeleteDiscount show={showModalDeleteDiscount} setShow={setShowModalDeleteDiscount} />
            </div>
        </div>
    );
};

export default ManageDiscount;
