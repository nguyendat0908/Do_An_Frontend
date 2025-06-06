import { FaStar } from 'react-icons/fa6';
import { CiShoppingCart } from 'react-icons/ci';
import demoBookPic from '../../assets/images/Book-picture/Demo-book.png';
import './Book.scss';
import { Card } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

const BookCard = () => {
    return (
        <Card className="border shadow-sm card-wrapper">
            <Card.Img variant="top" src={demoBookPic} style={{ width: '11rem', height: '11rem' }} />
            <Card.Body style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
                <div className="card-header">
                    <span>Nguyễn Hoàng Đạt</span>
                    <div className="header-review">
                        <span>4</span>
                        <FaStar style={{ color: '#f2ac13' }} />
                    </div>
                </div>
                <div className="card-name">Đắc Nhân Tâm</div>
                <div className="card-footer">
                    <div className="price">120.000&#x20AB;</div>
                    <Tippy
                        content="Thêm vào giỏ hàng"
                        placement="left"
                        trigger="mouseenter"
                        className="custom-tooltip"
                        animation="shift-away"
                        arrow={false}
                    >
                        <div className="cart-icon">
                            <CiShoppingCart />
                        </div>
                    </Tippy>
                </div>
            </Card.Body>
        </Card>
    );
};

export default BookCard;
